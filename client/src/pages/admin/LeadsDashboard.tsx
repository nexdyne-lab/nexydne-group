import { useState, useMemo } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Download, 
  Search, 
  Users, 
  TrendingUp, 
  Calendar, 
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  FileText,
  Mail,
  Building2,
  Briefcase,
  Star,
  ArrowLeft
} from "lucide-react";

export default function LeadsDashboard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState<"createdAt" | "leadScore" | "email">("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [dateRange, setDateRange] = useState<"all" | "today" | "week" | "month">("all");
  const limit = 20;

  // Calculate date filters
  const dateFilters = useMemo(() => {
    const now = new Date();
    switch (dateRange) {
      case "today":
        return { startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString() };
      case "week":
        return { startDate: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString() };
      case "month":
        return { startDate: new Date(now.getFullYear(), now.getMonth(), 1).toISOString() };
      default:
        return {};
    }
  }, [dateRange]);

  // Fetch leads
  const { data: leadsData, isLoading: leadsLoading, error: leadsError } = trpc.leads.list.useQuery({
    limit,
    offset: page * limit,
    search: search || undefined,
    sortBy,
    sortOrder,
    ...dateFilters,
  });

  // Fetch stats
  const { data: stats, isLoading: statsLoading } = trpc.leads.stats.useQuery();

  // Fetch analytics
  const { data: analyticsData } = trpc.leads.analytics.useQuery();

  // Export mutation
  const exportMutation = trpc.leads.export.useQuery({
    search: search || undefined,
    ...dateFilters,
  }, {
    enabled: false,
  });

  const handleExport = async () => {
    try {
      const result = await exportMutation.refetch();
      if (result.data?.csv) {
        const blob = new Blob([result.data.csv], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `leads-export-${new Date().toISOString().split("T")[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        toast.success(`Exported ${result.data.count} leads to CSV`);
      }
    } catch (error) {
      toast.error("Failed to export leads");
    }
  };

  const getScoreBadge = (score: number | null) => {
    const s = score || 0;
    if (s >= 70) return <Badge className="bg-green-500 hover:bg-green-600">High Intent ({s})</Badge>;
    if (s >= 40) return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium ({s})</Badge>;
    return <Badge variant="secondary">Standard ({s})</Badge>;
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const totalPages = Math.ceil((leadsData?.total || 0) / limit);

  // Check for auth error
  if (leadsError?.message?.includes("Unauthorized") || leadsError?.message?.includes("FORBIDDEN")) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-red-600">Access Denied</CardTitle>
            <CardDescription>
              You need admin privileges to access this dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Site
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Lead Management</h1>
                <p className="text-sm text-slate-500">Track and export captured leads</p>
              </div>
            </div>
            <Button onClick={handleExport} disabled={exportMutation.isFetching}>
              <Download className="w-4 h-4 mr-2" />
              {exportMutation.isFetching ? "Exporting..." : "Export CSV"}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Total Leads</CardTitle>
              <Users className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">
                {statsLoading ? "..." : stats?.totalLeads || 0}
              </div>
              <p className="text-xs text-slate-500 mt-1">All time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">This Week</CardTitle>
              <Calendar className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">
                {statsLoading ? "..." : stats?.leadsThisWeek || 0}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {stats?.leadsToday || 0} today
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">This Month</CardTitle>
              <TrendingUp className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">
                {statsLoading ? "..." : stats?.leadsThisMonth || 0}
              </div>
              <p className="text-xs text-slate-500 mt-1">New leads</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">Avg Lead Score</CardTitle>
              <Star className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-600">
                {statsLoading ? "..." : stats?.avgLeadScore || 0}
              </div>
              <p className="text-xs text-slate-500 mt-1">Out of 100</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Case Studies */}
        {stats?.topCaseStudies && stats.topCaseStudies.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Top Performing Case Studies
              </CardTitle>
              <CardDescription>Case studies generating the most leads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.topCaseStudies.map((cs, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-medium text-slate-700 truncate max-w-md">{cs.title}</span>
                    </div>
                    <Badge variant="outline">{cs.downloads} downloads</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Search by email, name, or company..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(0);
                  }}
                  className="pl-10"
                />
              </div>
              <Select value={dateRange} onValueChange={(v: any) => { setDateRange(v); setPage(0); }}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="createdAt">Date</SelectItem>
                  <SelectItem value="leadScore">Lead Score</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              >
                <ArrowUpDown className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Captured Leads</CardTitle>
            <CardDescription>
              {leadsData?.total || 0} total leads matching your filters
            </CardDescription>
          </CardHeader>
          <CardContent>
            {leadsLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-slate-500">Loading leads...</p>
              </div>
            ) : leadsData?.leads.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-700 mb-2">No leads found</h3>
                <p className="text-slate-500">
                  {search ? "Try adjusting your search criteria" : "Leads will appear here when visitors download case studies"}
                </p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Case Study</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {leadsData?.leads.map((lead, index) => (
                        <TableRow key={lead.id}>
                          <TableCell className="text-slate-500">
                            {page * limit + index + 1}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Mail className="w-3 h-3 text-slate-400" />
                                <span className="font-medium">{lead.email}</span>
                              </div>
                              {(lead.firstName || lead.lastName) && (
                                <div className="text-sm text-slate-500">
                                  {lead.firstName} {lead.lastName}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            {lead.company ? (
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Building2 className="w-3 h-3 text-slate-400" />
                                  <span>{lead.company}</span>
                                </div>
                                {lead.jobTitle && (
                                  <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <Briefcase className="w-3 h-3" />
                                    <span>{lead.jobTitle}</span>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <FileText className="w-3 h-3 text-slate-400" />
                                <span className="text-sm max-w-xs truncate" title={lead.caseStudyTitle || ""}>                                  {lead.caseStudyTitle || "—"}
                                </span>
                              </div>
                              {lead.caseStudyIndustry && (
                                <Badge variant="outline" className="text-xs">
                                  {lead.caseStudyIndustry}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            {getScoreBadge(lead.leadScore)}
                          </TableCell>
                          <TableCell className="text-sm text-slate-500">
                            {formatDate(lead.createdAt)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6 pt-4 border-t">
                    <p className="text-sm text-slate-500">
                      Showing {page * limit + 1} to {Math.min((page + 1) * limit, leadsData?.total || 0)} of {leadsData?.total || 0}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.max(0, p - 1))}
                        disabled={page === 0}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        Previous
                      </Button>
                      <span className="text-sm text-slate-500 px-2">
                        Page {page + 1} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                        disabled={page >= totalPages - 1}
                      >
                        Next
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Case Study Analytics */}
        {analyticsData?.analytics && analyticsData.analytics.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Case Study Performance Analytics
              </CardTitle>
              <CardDescription>
                Track which content generates the highest quality leads
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Case Study</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead className="text-center">Downloads</TableHead>
                      <TableHead className="text-center">Unique Leads</TableHead>
                      <TableHead className="text-center">Avg Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analyticsData.analytics.map((item: any) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium max-w-xs truncate">
                          {item.caseStudyTitle}
                        </TableCell>
                        <TableCell>
                          {item.caseStudyIndustry ? (
                            <Badge variant="outline">{item.caseStudyIndustry}</Badge>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="font-semibold text-blue-600">{item.downloadCount}</span>
                        </TableCell>
                        <TableCell className="text-center">{item.uniqueLeads}</TableCell>
                        <TableCell className="text-center">
                          {getScoreBadge(item.avgLeadScore)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
