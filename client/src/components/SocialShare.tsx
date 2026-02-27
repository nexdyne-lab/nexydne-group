import { Linkedin, Twitter, Facebook, Link as LinkIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  url?: string;
  className?: string;
}

export default function SocialShare({ title, url, className = "" }: SocialShareProps) {
  // Use current window location if url is not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const handleShare = (platform: string) => {
    let shareLink = '';
    
    switch (platform) {
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'email':
        shareLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard");
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className={`bg-base border border-white/10 rounded-xl sm:rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-4 sm:p-5 md:p-6 ${className}`}>
      <h3 className="text-lg font-bold text-white mb-4">Share this insight</h3>
      <div className="grid grid-cols-2 gap-2">
        <Button 
          variant="outline" 
          className="border-white/10 hover:bg-white/5 hover:text-white justify-start"
          onClick={() => handleShare('linkedin')}
        >
          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#0077b5]" /> LinkedIn
        </Button>
        <Button 
          variant="outline" 
          className="border-white/10 hover:bg-white/5 hover:text-white justify-start"
          onClick={() => handleShare('twitter')}
        >
          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#1da1f2]" /> Twitter
        </Button>
        <Button 
          variant="outline" 
          className="border-white/10 hover:bg-white/5 hover:text-white justify-start"
          onClick={() => handleShare('facebook')}
        >
          <Facebook className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#4267B2]" /> Facebook
        </Button>
        <Button 
          variant="outline" 
          className="border-white/10 hover:bg-white/5 hover:text-white justify-start"
          onClick={() => handleShare('email')}
        >
          <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-muted-foreground/70" /> Email
        </Button>
      </div>
      <Button 
        variant="ghost" 
        className="w-full mt-2 text-muted-foreground/70 hover:text-white hover:bg-white/5"
        onClick={() => handleShare('copy')}
      >
        <LinkIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" /> Copy Link
      </Button>
    </div>
  );
}
