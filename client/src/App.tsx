import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import NotFound from "@/pages/NotFound";
import Home from "./pages/Home";
import Capabilities from "@/pages/Capabilities";
import ArtificialIntelligence from "@/pages/capabilities/ArtificialIntelligence";
import InternetOfThings from "@/pages/capabilities/IoT";
import DigitalTwins from "@/pages/capabilities/DigitalTwins";
import RiskResilience from "@/pages/capabilities/RiskResilience";
import CustomModelTuning from "@/pages/capabilities/CustomModelTuning";
import ConnectedProducts from "@/pages/capabilities/iot/ConnectedProducts";
import NextGenOperations from "@/pages/capabilities/iot/NextGenOperations";
import IoTBusinessBuilding from "@/pages/capabilities/iot/IoTBusinessBuilding";
import DataTransformation from "@/pages/capabilities/DataTransformation";
import ValueFocused from "@/pages/capabilities/data-transformation/ValueFocused";
import AcceleratedImpact from "@/pages/capabilities/data-transformation/AcceleratedImpact";
import LastingCapabilities from "@/pages/capabilities/data-transformation/LastingCapabilities";
import GenerativeAI from "@/pages/capabilities/GenerativeAI";
import AgenticAICapability from "@/pages/capabilities/AgenticAI";
import PredictiveAnalytics from "@/pages/capabilities/PredictiveAnalytics";
import ProcessAutomationAI from "@/pages/capabilities/ProcessAutomation";
import AIStrategyRoadmap from "@/pages/capabilities/AIStrategyRoadmap";
import CustomModelDevelopment from "@/pages/capabilities/CustomModelDevelopment";

// AI Ambition Pages (Bain-style case study pages)
import AutomateWorkflows from "@/pages/capabilities/ai-ambitions/AutomateWorkflows";
import CustomerExperiences from "@/pages/capabilities/ai-ambitions/CustomerExperiences";
import DataInsights from "@/pages/capabilities/ai-ambitions/DataInsights";
import ResponsibleAI from "@/pages/capabilities/ai-ambitions/ResponsibleAI";
import ModernizeLegacy from "@/pages/capabilities/ai-ambitions/ModernizeLegacy";
import ScaleAI from "@/pages/capabilities/ai-ambitions/ScaleAI";
import IntelligentProcessOptimization from "./pages/IntelligentProcessOptimization";
import ProcessOptimizationInsights from "./pages/solutions/ProcessOptimizationInsights";
import ProcessOptimizationCaseStudies from "./pages/solutions/ProcessOptimizationCaseStudies";

// Intelligent Process Optimization Sub-Pages
import IPOProcessDiscoveryMining from "./pages/solutions/process-optimization/ProcessDiscoveryMining";
import IPOIntelligentAutomationDesign from "./pages/solutions/process-optimization/IntelligentAutomationDesign";
import IPOWorkflowOptimization from "./pages/solutions/process-optimization/WorkflowOptimization";
import IPOAIPoweredDecisionSupport from "./pages/solutions/process-optimization/AIPoweredDecisionSupport";
import IPOChangeManagementTraining from "./pages/solutions/process-optimization/ChangeManagementTraining";
import IPOContinuousImprovementPrograms from "./pages/solutions/process-optimization/ContinuousImprovementPrograms";
import IntelligentProcessOptimizationNew from "./pages/IntelligentProcessOptimizationNew";
import DataDrivenCustomerIntelligence from "./pages/DataDrivenCustomerIntelligence";

// Customer Intelligence Case Studies
import CustomerIntelligenceCaseStudies from "./pages/solutions/customer-intelligence/case-studies/index";
import CIEcommerceRepeatPurchase from "./pages/solutions/customer-intelligence/case-studies/EcommerceRepeatPurchase";
import CISaasChurnReduction from "./pages/solutions/customer-intelligence/case-studies/SaasChurnReduction";
import CIBankCrossSell from "./pages/solutions/customer-intelligence/case-studies/BankCrossSell";

// Customer Intelligence Insights
import CustomerIntelligenceInsights from "./pages/solutions/customer-intelligence/insights/index";
import CIBeyondSegmentation from "./pages/solutions/customer-intelligence/insights/BeyondSegmentation";
import CIChurnPredictionPlaybook from "./pages/solutions/customer-intelligence/insights/ChurnPredictionPlaybook";
import CIHyperPersonalization from "./pages/solutions/customer-intelligence/insights/HyperPersonalization";

// Data-Driven Customer Intelligence Sub-Pages
import CICustomerDataPlatform from "./pages/solutions/customer-intelligence/CustomerDataPlatform";
import CIPredictiveAnalyticsModeling from "./pages/solutions/customer-intelligence/PredictiveAnalyticsModeling";
import CIBehavioralSegmentation from "./pages/solutions/customer-intelligence/BehavioralSegmentation";
import CIJourneyAnalyticsOptimization from "./pages/solutions/customer-intelligence/JourneyAnalyticsOptimization";
import CIPersonalizationStrategy from "./pages/solutions/customer-intelligence/PersonalizationStrategy";
import CIVoiceOfCustomer from "./pages/solutions/customer-intelligence/VoiceOfCustomer";
import CIAIPoweredRecommendations from "./pages/solutions/customer-intelligence/AIPoweredRecommendations";
import ScalableEnterpriseTransformation from "./pages/ScalableEnterpriseTransformation";

// Enterprise Transformation Sub-Pages (new design)
import SETCloudMigrationArchitecture from "./pages/solutions/enterprise-transformation/CloudMigrationArchitecture";
import SETInfrastructureModernization from "./pages/solutions/enterprise-transformation/InfrastructureModernization";
import SETPlatformEngineering from "./pages/solutions/enterprise-transformation/PlatformEngineering";
import SETDevOpsCICD from "./pages/solutions/enterprise-transformation/DevOpsCICD";
import SETSecurityCompliance from "./pages/solutions/enterprise-transformation/SecurityCompliance";
import SETDataPlatformEngineering from "./pages/solutions/enterprise-transformation/DataPlatformEngineering";
import SETCloudCostOptimization from "./pages/solutions/enterprise-transformation/CloudCostOptimization";
import SETTechnologyDueDiligence from "./pages/solutions/enterprise-transformation/TechnologyDueDiligence";

// Enterprise Transformation Case Studies
import HealthcareCloudMigration from "./pages/cases/HealthcareCloudMigration";
import FintechMicroservices from "./pages/cases/FintechMicroservices";
import MediaStreamingScale from "./pages/cases/MediaStreamingScale";

// Enterprise Transformation Insights
import EnterpriseTransformationAI from "./pages/insights/EnterpriseTransformationAI";
import ScalableDataArchitecture from "./pages/insights/ScalableDataArchitecture";
import EnterpriseIntegrationPlaybook from "./pages/insights/EnterpriseIntegrationPlaybook";
import AcceleratingBusinessGrowthSolution from "./pages/solutions/AcceleratingBusinessGrowth";

// Accelerating Business Growth Case Studies
import CaseStudyRetailEcommerce from "./pages/CaseStudyRetailEcommerce";
import CaseStudyTrainingSubscription from "./pages/CaseStudyTrainingSubscription";
import CaseStudyB2BDigitalOrdering from "./pages/CaseStudyB2BDigitalOrdering";

// Accelerating Business Growth Insights
import InsightDigitalChannelsGrowth from "./pages/InsightDigitalChannelsGrowth";
import InsightSubscriptionPlaybook from "./pages/InsightSubscriptionPlaybook";
import InsightEcommerceLaunchGuide from "./pages/InsightEcommerceLaunchGuide";
import DigitalGrowthPlaybook from "./pages/insights/DigitalGrowthPlaybook";
import EcommerceEconomics from "./pages/insights/EcommerceEconomics";
import MarketplacePlaybook from "./pages/insights/MarketplacePlaybook";

// Initiative Pages
import Initiatives from "./pages/Initiatives";
import MidMarketAIAccess from "./pages/initiatives/MidMarketAIAccess";
import IntelligenceCommons from "./pages/initiatives/IntelligenceCommons";
import RegionalPartnerships from "./pages/initiatives/RegionalPartnerships";

import ProcessAutomationNew from "./pages/ProcessAutomation";
import AppDevelopmentNew from "./pages/AppDevelopment";
import DataSolutionsNew from "./pages/DataSolutions";
import RPANew from "./pages/RPA";
import IPaaSNew from "./pages/IPaaS";
import IDPNew from "./pages/IDP";
import ProcessOrchestrationNew from "./pages/ProcessOrchestration";
import LowCodeDevelopment from "./pages/LowCodeDevelopment";
import CustomSoftwareDev from "./pages/CustomSoftwareDev";
import ServicePortals from "./pages/ServicePortals";
import ITModernization from "./pages/ITModernization";
import DataStrategyPage from "./pages/DataStrategy";
import DataPlatformPage from "./pages/DataPlatform";
import DataAnalyticsPage from "./pages/DataAnalytics";
import DataTrainingPage from "./pages/DataTraining";
import DataGovernancePage from "./pages/DataGovernance";
import DataConsultancyPage from "./pages/DataConsultancy";
import { CaseStudies } from "./pages/CaseStudies";
import LogisticsCaseStudy from "./pages/LogisticsCaseStudy";
import EcommerceCaseStudy from "./pages/EcommerceCaseStudy";
import ConsumerShopperInsights from "@/pages/capabilities/growth-marketing-sales/ConsumerShopperInsights";
import { Ecommerce as EcommerceCapability } from "@/pages/capabilities/growth-marketing-sales/Ecommerce";
import { PlatformStrategy } from "@/pages/capabilities/growth-marketing-sales/ecommerce/PlatformStrategy";
import { CRO } from "@/pages/capabilities/growth-marketing-sales/ecommerce/CRO";
import { MarketplaceManagement } from "@/pages/capabilities/growth-marketing-sales/ecommerce/MarketplaceManagement";
import GrowthStrategy from "@/pages/capabilities/growth-marketing-sales/GrowthStrategy";
import CommercialArchitecture from "@/pages/capabilities/growth-marketing-sales/CommercialArchitecture";
import PortfolioOptimization from "@/pages/capabilities/growth-marketing-sales/PortfolioOptimization";
import GreenGrowth from "@/pages/capabilities/growth-marketing-sales/GreenGrowth";
import CustomerExperience from "@/pages/capabilities/growth-marketing-sales/CustomerExperience";
import ServiceDesign from "@/pages/capabilities/growth-marketing-sales/ServiceDesign";
import PersonalizationAtScale from "@/pages/capabilities/growth-marketing-sales/PersonalizationAtScale";
import PricingMonetization from "@/pages/capabilities/growth-marketing-sales/PricingMonetization";
import BrandStorytelling from "@/pages/capabilities/growth-marketing-sales/BrandStorytelling";
import DigitalMarketing from "@/pages/capabilities/growth-marketing-sales/DigitalMarketing";
import SalesExcellence from "@/pages/capabilities/growth-marketing-sales/SalesExcellence";
import InsightsAnalytics from "@/pages/capabilities/growth-marketing-sales/InsightsAnalytics";
import { HeadlessCommerceGuide } from "@/pages/insights/HeadlessCommerceGuide";
import { AIInEcommerce } from "@/pages/insights/AIInEcommerce";
import { MobileCommerceOptimization } from "@/pages/insights/MobileCommerceOptimization";
import SaasCaseStudy from "./pages/SaasCaseStudy";
import RetailCaseStudy from "./pages/RetailCaseStudy";
import InsuranceCaseStudy from "./pages/InsuranceCaseStudy";
import TechnologyCaseStudy from "./pages/TechnologyCaseStudy";
import WhyIntelligentAutomation from "./pages/insights/WhyIntelligentAutomation";

// Homepage Case Studies (BCG/McKinsey Style)
import GlobalRetailerEcommerce from "./pages/cases/GlobalRetailerEcommerce";
import FinancialInstitutionAutomation from "./pages/cases/FinancialInstitutionAutomation";
import HealthcareProviderAI from "./pages/cases/HealthcareProviderAI";

// Homepage Insights (BCG/McKinsey Style)
import WhyIntelligentAutomationInsight from "./pages/insights/WhyIntelligentAutomationInsight";
import HowAIAgentsTransformInsight from "./pages/insights/HowAIAgentsTransformInsight";
import CompleteGuideProcessMiningInsight from "./pages/insights/CompleteGuideProcessMiningInsight";
import AIAgentsTransformOperations from "./pages/insights/AIAgentsTransformOperations";
import ProcessMiningGuide from "./pages/insights/ProcessMiningGuide";
import Insights from "./pages/Insights";

// Mid-Market Insight Articles
import MidMarketAIGuide from "./pages/insights/MidMarketAIGuide";
import ScalingOperationsInsight from "./pages/insights/ScalingOperations";
import CustomerIntelligenceInsight from "./pages/insights/CustomerIntelligence";
import Industries from "./pages/Industries";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiePreferences from "./pages/CookiePreferences";
import Accessibility from "./pages/Accessibility";
import FollowUs from "./pages/FollowUs";
import CeoGuideDataModernization from "./pages/insights/CeoGuideDataModernization";
import AIEconomicImpact from "./pages/insights/AIEconomicImpact";
import BuildingDataCulture from "./pages/insights/BuildingDataCulture";
import CloudNativeArchitecture from "./pages/insights/CloudNativeArchitecture";
import DataLakeToValueStream from "./pages/insights/DataLakeToValueStream";
import CorporateVentureAdvantage from "./pages/insights/CorporateVentureAdvantage";
import FromMVPToScale from "./pages/insights/FromMVPToScale";
import HiringForBuilders from "./pages/insights/HiringForBuilders";
import GenerativeSupplyChain from "./pages/insights/GenerativeSupplyChain";
import DigitalTwinManufacturing from "./pages/insights/DigitalTwinManufacturing";
import IoTResilientSupplyChain from "./pages/insights/IoTResilientSupplyChain";
import BeyondSegmentation from "./pages/insights/BeyondSegmentation";
import PrivacyByDesign from "./pages/insights/PrivacyByDesign";
import RealTimeDecisionArchitectures from "./pages/insights/RealTimeDecisionArchitectures";
import GreenGrowthImperative from "./pages/insights/GreenGrowthImperative";
import EnergyMaterials from "./pages/capabilities/growth-marketing-sales/green-growth/EnergyMaterials";
import ConsumerGoods from "./pages/capabilities/growth-marketing-sales/green-growth/ConsumerGoods";
import AdvancedManufacturing from "./pages/capabilities/growth-marketing-sales/green-growth/AdvancedManufacturing";
import NetZeroTransition from "./pages/insights/NetZeroTransition";
import CarbonMarkets from "./pages/insights/CarbonMarkets";
import GreenMaterials from "./pages/insights/GreenMaterials";
import MarketEntryArchitecture from "./pages/insights/MarketEntryArchitecture";
import CommercialDueDiligence from "./pages/insights/CommercialDueDiligence";
import ValuePropositionDesign from "./pages/insights/ValuePropositionDesign";
import MarketingOperations from "@/pages/capabilities/growth-marketing-sales/MarketingOperations";
import FutureOfMarketingOps from "@/pages/insights/FutureOfMarketingOps";
import NoCodeMarketingAutomation from "@/pages/insights/NoCodeMarketingAutomation";
import MarketingDataROI from "@/pages/insights/MarketingDataROI";
import MarTechStack from "@/pages/capabilities/growth-marketing-sales/MarTechStack";
import ComposableArchitecture from "@/pages/insights/ComposableArchitecture";
import MiddlewarePatterns from "@/pages/insights/MiddlewarePatterns";
import VendorSelection from "@/pages/insights/VendorSelection";
import StackOrchestration from "@/pages/capabilities/growth-marketing-sales/martech-stack/StackOrchestration";
import SemanticInfrastructure from "@/pages/capabilities/growth-marketing-sales/martech-stack/SemanticInfrastructure";
import MiddlewareStrategy from "@/pages/capabilities/growth-marketing-sales/martech-stack/MiddlewareStrategy";
import CRMImplementation from "./pages/capabilities/growth-marketing-sales/marketing-operations/CRMImplementation";
import MarketingAutomation from "./pages/capabilities/growth-marketing-sales/marketing-operations/MarketingAutomation";
import DataIntegrationDashboards from '@/pages/capabilities/growth-marketing-sales/marketing-operations/DataIntegrationDashboards';
import MarketingROI from '@/pages/capabilities/growth-marketing-sales/marketing-operations/MarketingROI';
import MartechAssessment from './pages/capabilities/growth-marketing-sales/marketing-operations/MartechAssessment';
import CampaignAnalytics from './pages/capabilities/growth-marketing-sales/marketing-operations/CampaignAnalytics';
import RetentionLoyalty from "@/pages/capabilities/growth-marketing-sales/RetentionLoyalty";
import ChurnPrediction from "@/pages/capabilities/growth-marketing-sales/retention-loyalty/ChurnPrediction";
import LoyaltyProgram from "@/pages/capabilities/growth-marketing-sales/retention-loyalty/LoyaltyProgram";
import CustomerHealth from "@/pages/capabilities/growth-marketing-sales/retention-loyalty/CustomerHealth";
import WhyNPSIsAVanityMetric from "@/pages/insights/WhyNPSIsAVanityMetric";
import ChurnPredictionPlaybook from "@/pages/insights/ChurnPredictionPlaybook";
import EconomicsOfLoyalty from "./pages/insights/EconomicsOfLoyalty";
import SeriesAFundraisingGuide from "./pages/insights/SeriesAFundraisingGuide";
import ValuationMistakes from "./pages/insights/ValuationMistakes";
import PitchDeckDesign from "./pages/insights/PitchDeckDesign";
import DueDiligenceChecklist from "./pages/insights/DueDiligenceChecklist";
import MAFailureAnalysis from "./pages/insights/MAFailureAnalysis";
import IntegrationPlaybook from "./pages/insights/IntegrationPlaybook";
import MACommercialDueDiligence from "./pages/insights/MACommercialDueDiligence";
import SynergyCapture from "./pages/insights/SynergyCapture";
import Team from "./pages/Team";
import About from "./pages/About";
import USOffice from "./pages/USOffice";
import PurposeMissionValues from "./pages/PurposeMissionValues";
import OurImpact from "./pages/OurImpact";
import TeamMemberProfile from "@/pages/TeamMemberProfile";
import OurPeople from "@/pages/OurPeople";
import Careers from "@/pages/Careers";
import Offices from "@/pages/Offices";
import Contact from "@/pages/Contact";

import RPA from "./pages/solutions/RPA";
import IPaaS from "@/pages/solutions/IPaaS";
import ProcessOrchestration from "@/pages/solutions/ProcessOrchestration";
import DataSolutions from "@/pages/solutions/DataSolutions";
import DataStrategy from "@/pages/solutions/DataStrategy";
import DataPlatform from "@/pages/solutions/DataPlatform";
import DataVisualization from "@/pages/solutions/DataVisualization";
import StrategyCorporateFinance from "@/pages/StrategyCorporateFinance";
import Operations from "@/pages/Operations";
import SupplyChainOptimization from "@/pages/operations/SupplyChain";
import QualityManagement from "@/pages/operations/QualityManagement";
import ProductionOptimization from "@/pages/operations/ProductionOptimization";
import WorkforceOptimization from "@/pages/operations/WorkforceOptimization";
import PerformanceAnalytics from "@/pages/operations/PerformanceAnalytics";
import ProcessAutomation from "@/pages/operations/ProcessAutomation";
import StrategicProcurement from "@/pages/operations/StrategicProcurement";
import ServiceOperations from "@/pages/operations/ServiceOperations";
import ProductDevelopment from "@/pages/operations/ProductDevelopment";
import FractionalCFO from "@/pages/strategy-corporate-finance/CFOServices";
import FinancialPlanningAnalysis from "@/pages/strategy-corporate-finance/FinancialPlanningAnalysis";
import FPACaseStudy from "@/pages/FPACaseStudy";
import CapitalRaising from "@/pages/strategy-corporate-finance/CapitalRaising";
import MergersAcquisitions from "@/pages/strategy-corporate-finance/MergersAcquisitions";
import BusinessStrategy from "@/pages/strategy-corporate-finance/BusinessStrategy";
import PerformanceImprovement from "@/pages/strategy-corporate-finance/PerformanceImprovement";
import AIPoweredFinance from "@/pages/strategy-corporate-finance/AIPoweredFinance";
import FractionalCFOCaseStudies from "@/pages/FractionalCFOCaseStudies";
import CaseStudyPredictiveRevenue from "@/pages/CaseStudyPredictiveRevenue";
import CaseStudyVarianceAnalysis from "@/pages/CaseStudyVarianceAnalysis";
import CaseStudyExecutiveDashboards from "@/pages/CaseStudyExecutiveDashboards";
import MedicalDeviceGrowth from "@/pages/case-studies/MedicalDeviceGrowth";
import RetailMarketExpansion from "@/pages/case-studies/RetailMarketExpansion";
import SaasCategoryLeadership from "@/pages/case-studies/SaasCategoryLeadership";
import DataTraining from "@/pages/solutions/DataTraining";
import TechnologyStrategy from "@/pages/solutions/TechnologyStrategy";
import DevOpsAutomation from "./pages/solutions/DevOpsAutomation";
import CostOptimization from "./pages/solutions/CostOptimization";
import CustomerInsights from "./pages/solutions/CustomerInsights";
import SecurityCompliance from "@/pages/solutions/SecurityCompliance";
import MachineLearning from "@/pages/solutions/MachineLearning";
import HealthcareDataPlatform from "@/pages/cases/HealthcareDataPlatform";
import RetailerMLForecasting from "@/pages/cases/RetailerMLForecasting";
import FinancialFraudDetection from "@/pages/cases/FinancialFraudDetection";
import ManufacturerDataMonetization from "@/pages/cases/ManufacturerDataMonetization";
import InsuranceAnalyticsBacklog from "@/pages/cases/InsuranceAnalyticsBacklog";
import HealthcareDataMaturity from "@/pages/cases/HealthcareDataMaturity";
import LogisticsOperationsDashboard from "@/pages/cases/LogisticsOperationsDashboard";
import SaaSProductAnalytics from "@/pages/cases/SaaSProductAnalytics";
import ManufacturingPredictiveMaintenance from "@/pages/cases/ManufacturingPredictiveMaintenance";
import GlobalRetailer from "./pages/cases/GlobalRetailer";
import FinancialInstitution from "./pages/cases/FinancialInstitution";
import HealthcareProvider from "./pages/cases/HealthcareProvider";
import BusinessTransformationStrategy from "./pages/insights/BusinessTransformationStrategy";
import PerformanceImprovementFramework from "./pages/insights/PerformanceImprovementFramework";
import DigitalTransformationManufacturing from "./pages/case-studies/DigitalTransformationManufacturing";
import OperationalExcellenceHealthcare from "./pages/case-studies/OperationalExcellenceHealthcare";
import StrategicRepositioningTechnology from "./pages/case-studies/StrategicRepositioningTechnology";
import FPATransformation from "./pages/case-studies/FPATransformation";
import SeriesBFunding from "./pages/case-studies/SeriesBFunding";
import HealthcareFunding from "./pages/case-studies/HealthcareFunding";
import ManufacturingGrowthEquity from "./pages/case-studies/ManufacturingGrowthEquity";
import PostMergerIntegration from "./pages/case-studies/PostMergerIntegration";
import StrategicAcquisition from "./pages/case-studies/StrategicAcquisition";
import CarveOutTransaction from "./pages/case-studies/CarveOutTransaction";
import ProfessionalServicesGrowth from "./pages/case-studies/ProfessionalServicesGrowth";
import DistributionRestructuring from "./pages/case-studies/DistributionRestructuring";
import HealthcareTransformation from "./pages/case-studies/HealthcareTransformation";
import ManufacturingCostReduction from "./pages/case-studies/ManufacturingCostReduction";
import DistributionWorkingCapital from "./pages/case-studies/DistributionWorkingCapital";
import EcommerceOperations from "./pages/case-studies/EcommerceOperations";
import RollingForecasts from "./pages/insights/RollingForecasts";
import KPIDashboards from "./pages/insights/KPIDashboards";
import CFODataIntegration from "./pages/insights/CFODataIntegration";
import SmartCostReduction from "./pages/insights/SmartCostReduction";
import WorkingCapitalOptimization from "./pages/insights/WorkingCapitalOptimization";
import LeanOperationsScale from "./pages/insights/LeanOperationsScale";
import FinancialDisciplineGrowth from "./pages/insights/FinancialDisciplineGrowth";
import CFOCashFlowGuide from "./pages/insights/CFOCashFlowGuide";
import InvestorReadyBoardDecks from "./pages/insights/InvestorReadyBoardDecks";
import StrategicPlansSuccess from "./pages/insights/StrategicPlansSuccess";
import OperatingModelRedesign from "./pages/insights/OperatingModelRedesign";
import PortfolioManagementInsight from "./pages/insights/PortfolioManagement";
import Cases from "./pages/Cases";
import CaseStudyLawFirm from "./pages/CaseStudyLawFirm";
import CaseStudyHealthcarePatient from "./pages/CaseStudyHealthcarePatient";
import CaseStudyHealthcareEHRModernization from "@/pages/CaseStudyHealthcareEHRModernization";
import CaseStudyBankProcess from "./pages/CaseStudyBankProcess";
import CaseStudyBankCoreModernization from "@/pages/CaseStudyBankCoreModernization";
import CaseStudyConsultingKnowledge from "./pages/CaseStudyConsultingKnowledge";
import CaseStudyInsuranceClaims from "./pages/CaseStudyInsuranceClaims";
import CaseStudyFintechPayment from "./pages/CaseStudyFintechPayment";
import CaseStudyLegalDocIntel from "./pages/CaseStudyLegalDocIntel";
import CaseStudyTelehealthScaling from "./pages/CaseStudyTelehealthScaling";
import CaseStudyWealthOnboarding from "./pages/CaseStudyWealthOnboarding";
import CaseStudyHealthcareAnalytics from "./pages/CaseStudyHealthcareAnalytics";
import CaseStudyAccountingAudit from "./pages/CaseStudyAccountingAudit";
import CaseStudyHospitalWorkflow from "./pages/CaseStudyHospitalWorkflow";
import BlogAIAutomation from "./pages/BlogAIAutomation";
import BlogDigitalTransformation from "./pages/BlogDigitalTransformation";
import BlogROIMeasurement from "./pages/BlogROIMeasurement";
import FinancialServicesSQLBootcamp from "./pages/cases/FinancialServicesSQLBootcamp";
import RetailerDataAcademy from "./pages/cases/RetailerDataAcademy";
import HealthcareDashboardTraining from "./pages/cases/HealthcareDashboardTraining";
import RetailDemandForecasting from "./pages/cases/RetailDemandForecasting";
import TelecomChurnPrediction from "./pages/cases/TelecomChurnPrediction";
import DataGovernance from "./pages/solutions/DataGovernance";
import HealthcareHIPAACompliance from "./pages/cases/HealthcareHIPAACompliance";
import FinancialDataQuality from "./pages/cases/FinancialDataQuality";
import RetailGDPRCompliance from "./pages/cases/RetailGDPRCompliance";
import ContentServicePlatform from "./pages/solutions/ContentServicePlatform";
import MediaCompanyDAM from "./pages/cases/MediaCompanyDAM";
import RetailProductContent from "./pages/cases/RetailProductContent";
import HealthcareContentCompliance from "./pages/cases/HealthcareContentCompliance";
import DataEngineering from "./pages/solutions/DataEngineering";
import FintechDataPipeline from "./pages/cases/FintechDataPipeline";
import EcommerceDataWarehouse from "./pages/cases/EcommerceDataWarehouse";
import ManufacturingIoTPipeline from "./pages/cases/ManufacturingIoTPipeline";
import AppDevelopment from "./pages/solutions/AppDevelopment";
import HealthcarePatientPortal from "./pages/cases/HealthcarePatientPortal";
import RetailInventoryApp from "./pages/cases/RetailInventoryApp";
import FintechMobileBanking from "./pages/cases/FintechMobileBanking";
import { LowcodeDevelopment } from "./pages/solutions/LowcodeDevelopment";
import { InsuranceClaimsPortal } from "./pages/cases/InsuranceClaimsPortal";
import { LogisticsTrackingApp } from "./pages/cases/LogisticsTrackingApp";
import { MunicipalPermitSystem } from "./pages/cases/MunicipalPermitSystem";
import { CustomSoftware } from "./pages/solutions/CustomSoftware";
import { EnergyTradingPlatform } from "./pages/cases/EnergyTradingPlatform";
import { PharmaceuticalComplianceSystem } from "./pages/cases/PharmaceuticalComplianceSystem";
import { ConstructionProjectManagement } from "./pages/cases/ConstructionProjectManagement";
import { CustomerPortal } from "./pages/solutions/CustomerPortal";
import { TelecomCustomerPortal } from "./pages/cases/TelecomCustomerPortal";
import { UtilityBillingPortal } from "./pages/cases/UtilityBillingPortal";
import { InsurancePolicyholderPortal } from "./pages/cases/InsurancePolicyholderPortal";
import LegacyModernization from "./pages/solutions/LegacyModernization";
import BankCoreModernization from "./pages/cases/BankCoreModernization";
import HealthcareEhrModernization from "./pages/cases/HealthcareEhrModernization";
import ManufacturingErpModernization from "./pages/cases/ManufacturingErpModernization";
import CustomerIntelligence from "./pages/solutions/CustomerIntelligence";
import RetailPersonalization from "./pages/cases/RetailPersonalization";
import FinancialChurnPrediction from "./pages/cases/FinancialChurnPrediction";
import TelecomCustomerExperience from "./pages/cases/TelecomCustomerExperience";
import DigitalEngagement from "./pages/solutions/DigitalEngagement";
import RetailOmnichannel from "./pages/cases/RetailOmnichannel";
import BankingMobileEngagement from "./pages/cases/BankingMobileEngagement";
import HospitalityGuestExperience from "./pages/cases/HospitalityGuestExperience";
import ConversationalAI from "./pages/solutions/ConversationalAI";
import EcommerceAIChatbot from "./pages/cases/EcommerceAIChatbot";
import TelecomIntelligentSupport from "./pages/cases/TelecomIntelligentSupport";
import MobileApps from "./pages/solutions/MobileApps";
import FitnessAppEngagement from "./pages/cases/FitnessAppEngagement";
import HeadlessCMS from "./pages/solutions/HeadlessCMS";
import Personalization from "@/pages/solutions/Personalization";
import CustomerDataPlatform from "@/pages/solutions/CustomerDataPlatform";
import CustomerJourneyMap from "@/pages/solutions/CustomerJourneyMap";
import DigitalExperiencePlatform from "./pages/solutions/DigitalExperiencePlatform";
import EnterpriseTransformation from "./pages/solutions/EnterpriseTransformation";
import EnterpriseTransformationHub from "./pages/solutions/EnterpriseTransformationHub";

import CloudInfrastructure from "@/pages/solutions/CloudInfrastructure";
import APIIntegration from "@/pages/solutions/APIIntegration";
import EcommercePlatforms from "@/pages/solutions/business-growth/EcommercePlatforms";
import Chatbots from "@/pages/solutions/Chatbots";
import NativeApps from "@/pages/solutions/business-growth/NativeApps";
import ConversionOptimization from "@/pages/solutions/business-growth/ConversionOptimization";
import ABGECommerceStrategyLaunch from "@/pages/solutions/business-growth/ECommerceStrategyLaunch";
import ABGDigitalProductDevelopment from "@/pages/solutions/business-growth/DigitalProductDevelopment";
import ABGGrowthMarketingAcquisition from "@/pages/solutions/business-growth/GrowthMarketingAcquisition";
import ABGPricingMonetizationStrategy from "@/pages/solutions/business-growth/PricingMonetizationStrategy";
import ABGGoToMarketAcceleration from "@/pages/solutions/business-growth/GoToMarketAcceleration";
import ABGRevenueOperationsAnalytics from "@/pages/solutions/business-growth/RevenueOperationsAnalytics";
import BusinessBuilding from "@/pages/capabilities/BusinessBuilding";
import VenturePortfolio from "@/pages/VenturePortfolio";
import GrowthSimulator from "@/pages/tools/GrowthSimulator";
import DigitalVentureLaunch from "@/pages/capabilities/business-building/DigitalVentureLaunch";
import ProductStrategyDesign from "@/pages/capabilities/business-building/ProductStrategyDesign";
import GrowthScaling from "@/pages/capabilities/business-building/GrowthScaling";
import AIPoweredAcceleration from "@/pages/capabilities/business-building/AIPoweredAcceleration";
import DistinctiveExpertise from "@/pages/capabilities/business-building/DistinctiveExpertise";
import GoToMarketScale from "@/pages/capabilities/business-building/GoToMarketScale";
import DigitalTransformationAccelerator from "@/pages/capabilities/business-building/DigitalTransformationAccelerator";
import RapidInnovationTesting from "@/pages/capabilities/business-building/RapidInnovationTesting";
import PerformanceIntelligenceBenchmarking from "@/pages/capabilities/business-building/PerformanceIntelligenceBenchmarking";
import GrowthMarketingSales from "@/pages/capabilities/GrowthMarketingSales";
import DigitalMarketingCapability from "./pages/capabilities/growth-marketing-sales/DigitalMarketing";
import PerformanceMarketing from "./pages/capabilities/growth-marketing-sales/digital-marketing/PerformanceMarketing";
import AnalyticsAttribution from "./pages/capabilities/growth-marketing-sales/digital-marketing/AnalyticsAttribution";
import BrandStrategy from "./pages/capabilities/growth-marketing-sales/digital-marketing/BrandStrategy";
import BrandStrategyCore from "./pages/capabilities/growth-marketing-sales/BrandStrategy";
import FutureOfPerformanceMarketing from "./pages/insights/FutureOfPerformanceMarketing";
import AIDrivenBrandStrategy from "./pages/insights/AIDrivenBrandStrategy";
import HyperPersonalizationAtScale from "./pages/insights/HyperPersonalizationAtScale";
import HealthcarePatientIntake from "@/pages/cases/HealthcarePatientIntake";
import LogisticsDriverExperience from "@/pages/cases/LogisticsDriverExperience";
import StreamingRecommendationEngine from "@/pages/cases/StreamingRecommendationEngine";
import FinancialServicesEmail from "@/pages/cases/FinancialServicesEmail";
import RetailLoyaltyProgram from "@/pages/cases/RetailLoyaltyProgram";
import DynamicPricing from "./pages/capabilities/growth-marketing-sales/pricing-monetization/DynamicPricing";
import PackagingBundling from "./pages/capabilities/growth-marketing-sales/pricing-monetization/PackagingBundling";
import DiscountOptimization from "./pages/capabilities/growth-marketing-sales/pricing-monetization/DiscountOptimization";
import PsychologyOfValue from "./pages/insights/PsychologyOfValue";
import AlgorithmicPricingSMEs from "./pages/insights/AlgorithmicPricingSMEs";
import SubscriptionPricingModels from "./pages/insights/SubscriptionPricingModels";
import SalesOperations from './pages/capabilities/growth-marketing-sales/sales-excellence/SalesOperations';
import GoToMarket from './pages/capabilities/growth-marketing-sales/sales-excellence/GoToMarket';
import ChannelPartners from './pages/capabilities/growth-marketing-sales/sales-excellence/ChannelPartners';
import AISalesForecasting from "./pages/insights/AISalesForecasting";
import ModernSalesStack from "./pages/insights/ModernSalesStack";
import AlgorithmicTerritoryPlanning from "./pages/insights/AlgorithmicTerritoryPlanning";
import SalesTransformation from "@/pages/solutions/SalesTransformation";
import RetailModernizationPersonalization from "./pages/cases/RetailModernizationPersonalization";
import CaseStudyDetail from "@/pages/cases/CaseStudyDetail";
import PaymentTerminalOnboarding from "./pages/cases/PaymentTerminalOnboarding";
import LogisticsProductAccess from "./pages/cases/LogisticsProductAccess";
import LogisticsBrandConsolidation from "./pages/cases/LogisticsBrandConsolidation";
import MarketingConversionBoost from "./pages/cases/MarketingConversionBoost";
import CustomerProfitability from "./pages/cases/CustomerProfitability";
import ConsumerDecisionJourney from "./pages/cases/ConsumerDecisionJourney";
import MediaHeadlessCMS from "./pages/cases/MediaHeadlessCMS";
import EcommerceHeadlessCMS from "./pages/cases/EcommerceHeadlessCMS";
import EnterpriseHeadlessCMS from "./pages/cases/EnterpriseHeadlessCMS";
import DigitalBankMobilePlatform from "./pages/cases/DigitalBankMobilePlatform";
import FoodDeliveryApp from "./pages/cases/FoodDeliveryApp";
import HealthcarePatientEngagement from "./pages/cases/HealthcarePatientEngagement";
import EnergyGridSecurity from "./pages/cases/EnergyGridSecurity";
import AirlineMaintenance from "./pages/cases/AirlineMaintenance";
import RetailShrinkage from "./pages/cases/RetailShrinkage";
import InsuranceClimateRisk from "./pages/cases/InsuranceClimateRisk";
import SemiconductorDesignTwin from "./pages/cases/SemiconductorDesignTwin";
import MobilityModelCity from "./pages/cases/MobilityModelCity";
import SoftwareCodingAssistant from "./pages/cases/SoftwareCodingAssistant";
import MediaContentGenAI from "./pages/cases/MediaContentGenAI";
import LogisticsColdChain from "./pages/cases/LogisticsColdChain";
import FinancialComplianceAI from "./pages/cases/FinancialComplianceAI";
import SpecializedCodingAssistant from "./pages/cases/SpecializedCodingAssistant";
import FinancialFraudDetectionML from "./pages/cases/FinancialFraudDetectionML";
import AITechnologyConsulting from "./pages/AITechnologyConsulting";

// Capability Insights Listing Pages
import AIInsights from "./pages/capabilities/insights/AIInsights";
import BusinessBuildingInsights from "./pages/capabilities/insights/BusinessBuildingInsights";
import TechnologyInsights from "./pages/capabilities/insights/TechnologyInsights";
import StrategyFinanceInsights from "./pages/capabilities/insights/StrategyFinanceInsights";
import OperationsInsights from "./pages/capabilities/insights/OperationsInsights";
import GrowthMarketingInsights from "./pages/capabilities/insights/GrowthMarketingInsights";

// Capability Case Studies Listing Pages
import AICaseStudies from "./pages/capabilities/case-studies/AICaseStudies";
import BusinessBuildingCaseStudies from "./pages/capabilities/case-studies/BusinessBuildingCaseStudies";
import TechnologyCaseStudiesListing from "./pages/capabilities/case-studies/TechnologyCaseStudies";
import StrategyFinanceCaseStudies from "./pages/capabilities/case-studies/StrategyFinanceCaseStudies";
import OperationsCaseStudies from "./pages/capabilities/case-studies/OperationsCaseStudies";
import GrowthMarketingCaseStudies from "./pages/capabilities/case-studies/GrowthMarketingCaseStudies";

// Individual AI Insight Articles
import AIROIFramework from "./pages/capabilities/insights/ai/AIROIFramework";
import FirstAIUseCase from "./pages/capabilities/insights/ai/FirstAIUseCase";
import AIGovernance from "./pages/capabilities/insights/ai/AIGovernance";

// Individual AI Case Study Articles
import InsuranceDocumentAI from "./pages/capabilities/case-studies/ai/InsuranceDocumentAI";
import ManufacturingPredictiveMaintenanceAI from "./pages/capabilities/case-studies/ai/ManufacturingPredictiveMaintenance";
import SaaSCustomerServiceAI from "./pages/capabilities/case-studies/ai/SaaSCustomerServiceAI";
import DistributorDemandForecasting from "./pages/capabilities/case-studies/ai/DistributorDemandForecasting";
import LenderAIUnderwriting from "./pages/capabilities/case-studies/ai/LenderAIUnderwriting";
import FoodQualityAI from "./pages/capabilities/case-studies/ai/FoodQualityAI";

// Individual Business Building Insight Articles
import DigitalVenturePlaybook from "./pages/capabilities/insights/business-building/DigitalVenturePlaybook";

// Individual Business Building Case Study Articles
import EcommercePlatformLaunch from "./pages/capabilities/case-studies/business-building/EcommercePlatformLaunch";
import DistributorMarketplace from "./pages/capabilities/case-studies/business-building/DistributorMarketplace";
import ConsultingSaaS from "./pages/capabilities/case-studies/business-building/ConsultingSaaS";
import ManufacturerDTC from "./pages/capabilities/case-studies/business-building/ManufacturerDTC";
import HealthcareTelehealth from "./pages/capabilities/case-studies/business-building/HealthcareTelehealth";
import LogisticsTechSpinoff from "./pages/capabilities/case-studies/business-building/LogisticsTechSpinoff";
import WealthAdjacent from "./pages/capabilities/case-studies/business-building/WealthAdjacent";

// Individual Technology Insight Articles
import CloudMigrationRoadmap from "./pages/capabilities/insights/technology/CloudMigrationRoadmap";

// Individual Technology Case Study Articles
import HealthcareSystemModernization from "./pages/capabilities/case-studies/technology/HealthcareSystemModernization";

// Individual Strategy Finance Insight Articles
import CFOGuideAIInvestment from "./pages/capabilities/insights/strategy-finance/CFOGuideAIInvestment";
import StrategicFinanceGuide from "./pages/capabilities/insights/strategy-finance/StrategicFinanceGuide";
import CapitalRaising2026 from "./pages/capabilities/insights/strategy-finance/CapitalRaising2026";
import MAPlaybook from "./pages/capabilities/insights/strategy-finance/MAPlaybook";
import FPAExcellence from "./pages/capabilities/insights/strategy-finance/FPAExcellence";
import PricingStrategy from "./pages/capabilities/insights/strategy-finance/PricingStrategy";
import WorkingCapital from "./pages/capabilities/insights/strategy-finance/WorkingCapital";

// Individual Strategy Finance Case Study Articles
import PEGrowthHealthcare from "./pages/capabilities/case-studies/strategy-finance/PEGrowthHealthcare";
import ManufacturingAcquisition from "./pages/capabilities/case-studies/strategy-finance/ManufacturingAcquisition";
import DistributionFPA from "./pages/capabilities/case-studies/strategy-finance/DistributionFPA";
import SaaSSeriesB from "./pages/capabilities/case-studies/strategy-finance/SaaSSeriesB";
import RetailTurnaround from "./pages/capabilities/case-studies/strategy-finance/RetailTurnaround";
import ServicesExit from "./pages/capabilities/case-studies/strategy-finance/ServicesExit";

// Individual Operations Insight Articles
import SupplyChainResilience from "./pages/capabilities/insights/operations/SupplyChainResilience";
import LeanOperations from "./pages/capabilities/insights/operations/LeanOperations";
import AutomationROI from "./pages/capabilities/insights/operations/AutomationROI";
import QualitySystems from "./pages/capabilities/insights/operations/QualitySystems";
import WorkforcePlanning from "./pages/capabilities/insights/operations/WorkforcePlanning";
import OperationalMetrics from "./pages/capabilities/insights/operations/OperationalMetrics";

// Individual Growth Marketing Case Study Articles
import B2BDigitalMarketing from "./pages/capabilities/case-studies/growth-marketing/B2BDigitalMarketing";
import SoftwareSalesOptimization from "./pages/capabilities/case-studies/growth-marketing/SoftwareSalesOptimization";
import SubscriptionRetention from "./pages/capabilities/case-studies/growth-marketing/SubscriptionRetention";
import ManufacturerEcommerce from "./pages/capabilities/case-studies/growth-marketing/ManufacturerEcommerce";
import DistributionPricing from "./pages/capabilities/case-studies/growth-marketing/DistributionPricing";
import TechABM from "./pages/capabilities/case-studies/growth-marketing/TechABM";

// Individual Operations Case Study Articles
import ConsumerGoodsSupplyChain from "./pages/capabilities/case-studies/operations/ConsumerGoodsSupplyChain";
import EcommerceFulfillment from "./pages/capabilities/case-studies/operations/EcommerceFulfillment";
import AerospaceQuality from "./pages/capabilities/case-studies/operations/AerospaceQuality";
import DistributionWarehouse from "./pages/capabilities/case-studies/operations/DistributionWarehouse";
import FoodProductionPlanning from "./pages/capabilities/case-studies/operations/FoodProductionPlanning";
import HealthcareWorkforce from "./pages/capabilities/case-studies/operations/HealthcareWorkforce";

// AI Technology Consulting Accelerator Sub-Pages
import ProcessFlowAI from "./pages/accelerators/ProcessFlowAI";
import CloudModernization from "./pages/accelerators/CloudModernization";
import IntelligentAdoption from "./pages/accelerators/IntelligentAdoption";

// AI Technology Consulting Case Study Pages
import AccountingFirmCaseStudy from "./pages/case-studies/AccountingFirmCaseStudy";
import CreditUnionCaseStudy from "./pages/case-studies/CreditUnionCaseStudy";
import MedicalPracticeCaseStudy from "./pages/case-studies/MedicalPracticeCaseStudy";

// AI Technology Consulting Service Pages
import CloudDataArchitecture from "./pages/services/CloudDataArchitecture";
import CyberResilience from "./pages/services/CyberResilience";
import IntelligentAdoptionService from "./pages/services/IntelligentAdoption";
import AgenticAI from "./pages/services/AgenticAI";

// AI Technology Consulting Insights Pages
import AITechMidMarketAIAccess from "./pages/insights/MidMarketAIAccess";
import AITechEfficiencyImprovement from "./pages/insights/EfficiencyImprovement";
import AITechChangeManagement from "./pages/insights/ChangeManagementAISuccess";

// Industry Landing Pages
import ManufacturingIndustry from "./pages/industries/ManufacturingIndustry";
import HealthcareIndustry from "./pages/industries/HealthcareIndustry";
import FinancialServicesIndustry from "./pages/industries/FinancialServicesIndustry";
import RetailIndustry from "./pages/industries/RetailIndustry";
import AerospaceDefenseIndustry from "./pages/industries/AerospaceDefenseIndustry";
import AutomotiveIndustry from "./pages/industries/AutomotiveIndustry";
import ConsumerProductsIndustry from "./pages/industries/ConsumerProductsIndustry";
import EducationIndustry from "./pages/industries/EducationIndustry";
import EnergyUtilitiesIndustry from "./pages/industries/EnergyUtilitiesIndustry";
import InsuranceIndustry from "./pages/industries/InsuranceIndustry";
import PrivateEquityIndustry from "./pages/industries/PrivateEquityIndustry";
import PublicSectorIndustry from "./pages/industries/PublicSectorIndustry";
import TechnologyMediaTelecomIndustry from "./pages/industries/TechnologyMediaTelecomIndustry";
import TransportationLogisticsIndustry from "./pages/industries/TransportationLogisticsIndustry";
import TravelHospitalityIndustry from "./pages/industries/TravelHospitalityIndustry";
import UrbanDevelopmentIndustry from "./pages/industries/UrbanDevelopmentIndustry";

// Industry Case Study Pages
import FinancialFraudDetectionIndustry from "./pages/cases/industries/FinancialFraudDetection";
import BankCrossSellIndustry from "./pages/cases/industries/BankCrossSell";
import WealthOnboardingIndustry from "./pages/cases/industries/WealthOnboarding";
import HealthcareTransformationIndustry from "./pages/cases/industries/HealthcareTransformation";
import HealthcareReadmissionIndustry from "./pages/cases/industries/HealthcareReadmission";
import HealthcareRevenueCycleIndustry from "./pages/cases/industries/HealthcareRevenueCycle";
import AutomotiveSmartFactoryIndustry from "./pages/cases/industries/AutomotiveSmartFactory";
import SemiconductorQualityPredictionIndustry from "./pages/cases/industries/SemiconductorQualityPrediction";
import IndustrialConnectedProductsIndustry from "./pages/cases/industries/IndustrialConnectedProducts";
import FashionRetailTransformationIndustry from "./pages/cases/industries/FashionRetailTransformation";
import GroceryDemandForecastingIndustry from "./pages/cases/industries/GroceryDemandForecasting";
import RetailLoyaltyTransformationIndustry from "./pages/cases/industries/RetailLoyaltyTransformation";
import MediaStreamingLaunchIndustry from "./pages/cases/industries/MediaStreamingLaunch";
import TechEngineeringTransformationIndustry from "./pages/cases/industries/TechEngineeringTransformation";
import TelecomCustomerExperienceIndustry from "./pages/cases/industries/TelecomCustomerExperience";
import UtilityGridModernizationIndustry from "./pages/cases/industries/UtilityGridModernization";
import RenewableEnergyForecastingIndustry from "./pages/cases/industries/RenewableEnergyForecasting";
import OilGasDigitalTransformationIndustry from "./pages/cases/industries/OilGasDigitalTransformation";
import PowerGenerationPredictiveMaintenanceIndustry from "./pages/cases/industries/PowerGenerationPredictiveMaintenance";
import FoodBeverageDemandForecastingIndustry from "./pages/cases/industries/FoodBeverageDemandForecasting";
import ConsumerElectronicsDemandOptimizationIndustry from "./pages/cases/industries/ConsumerElectronicsDemandOptimization";
import RetailAssortmentOptimizationIndustry from "./pages/cases/industries/RetailAssortmentOptimization";
import UniversityStudentSuccessIndustry from "./pages/cases/industries/UniversityStudentSuccess";
import K12AdaptiveLearningIndustry from "./pages/cases/industries/K12AdaptiveLearning";
import UniversityOnlineProgramsIndustry from "./pages/cases/industries/UniversityOnlinePrograms";
import GovernmentDigitalServicesIndustry from "./pages/cases/industries/GovernmentDigitalServices";
import GovernmentBenefitsAIIndustry from "./pages/cases/industries/GovernmentBenefitsAI";
import SmartCityInfrastructureIndustry from "./pages/cases/industries/SmartCityInfrastructure";
import DefenseSupplyChainIndustry from "./pages/cases/industries/DefenseSupplyChain";
import AerospaceDigitalEngineeringIndustry from "./pages/cases/industries/AerospaceDigitalEngineering";
import AviationPredictiveMaintenanceIndustry from "./pages/cases/industries/AviationPredictiveMaintenance";
import HotelRevenueManagementIndustry from "./pages/cases/industries/HotelRevenueManagement";
import HotelGuestExperienceIndustry from "./pages/cases/industries/HotelGuestExperience";
import AirlineLoyaltyRedesignIndustry from "./pages/cases/industries/AirlineLoyaltyRedesign";
import PEPortfolioOperationsIndustry from "./pages/cases/industries/PEPortfolioOperations";
import PEDueDiligenceIndustry from "./pages/cases/industries/PEDueDiligence";
import PECarveoutExecutionIndustry from "./pages/cases/industries/PECarveoutExecution";
import InsuranceClaimsAutomationIndustry from "./pages/cases/industries/InsuranceClaimsAutomation";
import InsuranceUnderwritingTransformationIndustry from "./pages/cases/industries/InsuranceUnderwritingTransformation";
import InsuranceCustomerExperienceIndustry from "./pages/cases/industries/InsuranceCustomerExperience";
import FreightOptimizationIndustry from "./pages/cases/industries/FreightOptimization";
import WarehouseAutomationIndustry from "./pages/cases/industries/WarehouseAutomation";
import LastMileOptimizationIndustry from "./pages/cases/industries/LastMileOptimization";
import NonprofitDigitalTransformationIndustry from "./pages/cases/industries/NonprofitDigitalTransformation";
import NonprofitImpactMeasurementIndustry from "./pages/cases/industries/NonprofitImpactMeasurement";
import NonprofitProgramOptimizationIndustry from "./pages/cases/industries/NonprofitProgramOptimization";
import ChemicalPlantOptimizationIndustry from "./pages/cases/industries/ChemicalPlantOptimization";
import ChemicalSupplyChainIndustry from "./pages/cases/industries/ChemicalSupplyChain";
import ChemicalSustainabilityIndustry from "./pages/cases/industries/ChemicalSustainability";

// Consumer Products Case Studies
import CaseStudyFoodBeverageDemandForecasting from "./pages/cases/CaseStudyFoodBeverageDemandForecasting";

// Whitepaper Download Page
import WhitepaperDownload from "./pages/WhitepaperDownload";

// Admin Pages
import LeadsDashboard from "./pages/admin/LeadsDashboard";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/capabilities" component={Capabilities} />
        <Route path="/capabilities/ai-technology-consulting" component={AITechnologyConsulting} />
        <Route path="/capabilities/ai-technology-consulting/processflow-ai" component={ProcessFlowAI} />
        <Route path="/capabilities/ai-technology-consulting/cloud-modernization" component={CloudModernization} />
        <Route path="/capabilities/ai-technology-consulting/intelligent-adoption" component={IntelligentAdoption} />
        <Route path="/capabilities/ai-technology-consulting/case-study/accounting-firm" component={AccountingFirmCaseStudy} />
        <Route path="/capabilities/ai-technology-consulting/case-study/credit-union" component={CreditUnionCaseStudy} />
        <Route path="/capabilities/ai-technology-consulting/case-study/medical-practice" component={MedicalPracticeCaseStudy} />
        <Route path="/capabilities/ai-technology-consulting/services/cloud-architecture" component={CloudDataArchitecture} />
        <Route path="/capabilities/ai-technology-consulting/services/cyber-resilience" component={CyberResilience} />
        <Route path="/capabilities/ai-technology-consulting/services/intelligent-adoption" component={IntelligentAdoptionService} />
        <Route path="/capabilities/ai-technology-consulting/services/agentic-ai" component={AgenticAI} />
        <Route path="/capabilities/technology/insights" component={TechnologyInsights} />
        <Route path="/capabilities/technology/case-studies" component={TechnologyCaseStudiesListing} />
        <Route path="/capabilities/technology/insights/cloud-migration-roadmap" component={CloudMigrationRoadmap} />
        <Route path="/capabilities/technology/case-studies/healthcare-system-modernization" component={HealthcareSystemModernization} />
        <Route path="/insights/mid-market-ai-access" component={AITechMidMarketAIAccess} />
        <Route path="/insights/efficiency-improvement-reality" component={AITechEfficiencyImprovement} />
        <Route path="/insights/change-management-ai-success" component={AITechChangeManagement} />
        <Route path="/capabilities/artificial-intelligence" component={ArtificialIntelligence} />
        <Route path="/capabilities/artificial-intelligence/insights" component={AIInsights} />
        <Route path="/capabilities/artificial-intelligence/case-studies" component={AICaseStudies} />
        <Route path="/capabilities/artificial-intelligence/insights/ai-roi-framework" component={AIROIFramework} />
        <Route path="/capabilities/artificial-intelligence/case-studies/insurance-document-ai" component={InsuranceDocumentAI} />
        <Route path="/capabilities/artificial-intelligence/insights/first-ai-use-case" component={FirstAIUseCase} />
        <Route path="/capabilities/artificial-intelligence/insights/ai-governance" component={AIGovernance} />
        <Route path="/capabilities/artificial-intelligence/case-studies/manufacturing-predictive-maintenance" component={ManufacturingPredictiveMaintenanceAI} />
        <Route path="/capabilities/artificial-intelligence/case-studies/saas-customer-service-ai" component={SaaSCustomerServiceAI} />
        <Route path="/capabilities/artificial-intelligence/case-studies/distributor-demand-forecasting" component={DistributorDemandForecasting} />
        <Route path="/capabilities/artificial-intelligence/case-studies/lender-ai-underwriting" component={LenderAIUnderwriting} />
        <Route path="/capabilities/artificial-intelligence/case-studies/food-quality-ai" component={FoodQualityAI} />
        <Route path="/capabilities/internet-of-things" component={InternetOfThings} />
        <Route path="/capabilities/internet-of-things/connected-products" component={ConnectedProducts} />
        <Route path="/capabilities/internet-of-things/next-gen-operations" component={NextGenOperations} />
        <Route path="/capabilities/internet-of-things/iot-business-building" component={IoTBusinessBuilding} />
        <Route path="/capabilities/digital-twins" component={DigitalTwins} />
        <Route path="/capabilities/risk-and-resilience" component={RiskResilience} />
        <Route path="/capabilities/custom-model-tuning" component={CustomModelTuning} />
        <Route path="/capabilities/data-transformation" component={DataTransformation} />
        <Route path="/capabilities/data-transformation/value-focused" component={ValueFocused} />
        <Route path="/capabilities/data-transformation/accelerated-impact" component={AcceleratedImpact} />
        <Route path="/capabilities/data-transformation/lasting-capabilities" component={LastingCapabilities} />
        <Route path="/capabilities/artificial-intelligence/generative-ai" component={GenerativeAI} />
        <Route path="/capabilities/generative-ai" component={GenerativeAI} />
        <Route path="/capabilities/artificial-intelligence/data-transformation" component={DataTransformation} />
        <Route path="/capabilities/artificial-intelligence/internet-of-things" component={InternetOfThings} />
        <Route path="/capabilities/artificial-intelligence/digital-twins" component={DigitalTwins} />
        <Route path="/capabilities/artificial-intelligence/risk-resilience" component={RiskResilience} />
        <Route path="/capabilities/artificial-intelligence/agentic-ai" component={AgenticAICapability} />
        <Route path="/capabilities/artificial-intelligence/predictive-analytics" component={PredictiveAnalytics} />
        <Route path="/capabilities/artificial-intelligence/process-automation" component={ProcessAutomationAI} />
        <Route path="/capabilities/artificial-intelligence/ai-strategy-roadmap" component={AIStrategyRoadmap} />
        <Route path="/capabilities/artificial-intelligence/custom-model-development" component={CustomModelDevelopment} />
        
        {/* AI Ambition Pages (What's your AI ambition?) */}
        <Route path="/capabilities/artificial-intelligence/automate-workflows" component={AutomateWorkflows} />
        <Route path="/capabilities/artificial-intelligence/customer-experiences" component={CustomerExperiences} />
        <Route path="/capabilities/artificial-intelligence/data-insights" component={DataInsights} />
        <Route path="/capabilities/artificial-intelligence/responsible-ai" component={ResponsibleAI} />
        <Route path="/capabilities/artificial-intelligence/modernize-legacy" component={ModernizeLegacy} />
        <Route path="/capabilities/artificial-intelligence/scale-ai" component={ScaleAI} />
        <Route path={"/solutions/intelligent-process-optimization"} component={IntelligentProcessOptimization} />
        <Route path={"/solutions/intelligent-process-optimization/insights"} component={ProcessOptimizationInsights} />
        <Route path={"/solutions/intelligent-process-optimization/case-studies"} component={ProcessOptimizationCaseStudies} />
        <Route path={"/solutions/intelligent-process-optimization/process-automation"} component={ProcessAutomationNew} />
        <Route path={"/solutions/intelligent-process-optimization/process-automation/rpa"} component={RPANew} />
        <Route path={"/solutions/intelligent-process-optimization/process-automation/ipaas"} component={IPaaSNew} />
        <Route path={"/solutions/intelligent-process-optimization/process-automation/idp"} component={IDPNew} />
        <Route path={"/solutions/intelligent-process-optimization/process-automation/process-orchestration"} component={ProcessOrchestrationNew} />
        <Route path={"/solutions/intelligent-process-optimization/app-development"} component={AppDevelopmentNew} />
        <Route path={"/solutions/intelligent-process-optimization/app-development/low-code"} component={LowCodeDevelopment} />
        <Route path={"/solutions/intelligent-process-optimization/app-development/custom-software"} component={CustomSoftwareDev} />
        <Route path={"/solutions/intelligent-process-optimization/app-development/service-portals"} component={ServicePortals} />
        <Route path={"/solutions/intelligent-process-optimization/app-development/it-modernization"} component={ITModernization} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions"} component={DataSolutionsNew} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions/data-strategy"} component={DataStrategyPage} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions/data-platform"} component={DataPlatformPage} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions/data-analytics"} component={DataAnalyticsPage} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions/data-training"} component={DataTrainingPage} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions/data-governance"} component={DataGovernancePage} />
        <Route path={"/solutions/intelligent-process-optimization/data-solutions/data-consultancy"} component={DataConsultancyPage} />

        {/* Intelligent Process Optimization Sub-Pages */}
        <Route path="/solutions/process-optimization/process-discovery-mining" component={IPOProcessDiscoveryMining} />
        <Route path="/solutions/process-optimization/intelligent-automation-design" component={IPOIntelligentAutomationDesign} />
        <Route path="/solutions/process-optimization/workflow-optimization" component={IPOWorkflowOptimization} />
        <Route path="/solutions/process-optimization/ai-powered-decision-support" component={IPOAIPoweredDecisionSupport} />
        <Route path="/solutions/process-optimization/change-management-training" component={IPOChangeManagementTraining} />
        <Route path="/solutions/process-optimization/continuous-improvement-programs" component={IPOContinuousImprovementPrograms} />

          <Route path="/solutions/rpa" component={RPA} />
          <Route path="/solutions/ipaas" component={IPaaS} />
          <Route path="/solutions/process-orchestration" component={ProcessOrchestration} />
        <Route path="/solutions/chatbots" component={Chatbots} />
        <Route path="/solutions/native-apps" component={NativeApps} />
        <Route path="/solutions/business-growth/native-apps" component={NativeApps} />
        <Route path="/solutions/data-solutions" component={DataSolutions} />
          <Route path="/solutions/data-strategy" component={DataStrategy} />
          <Route path="/solutions/data-platform" component={DataPlatform} />
          <Route path="/solutions/data-visualization" component={DataVisualization} />
          <Route path="/solutions/data-training" component={DataTraining} />
          <Route path="/solutions/machine-learning" component={MachineLearning} />
          <Route path="/solutions/data-governance" component={DataGovernance} />
          <Route path="/solutions/content-service-platform" component={ContentServicePlatform} />
          <Route path="/solutions/data-engineering" component={DataEngineering} />
        <Route path="/solutions/app-development" component={AppDevelopment} />
          <Route path="/solutions/lowcode-development" component={LowcodeDevelopment} />
          <Route path="/solutions/custom-software" component={CustomSoftware} />
          <Route path="/solutions/customer-portal" component={CustomerPortal} />
          <Route path="/solutions/enterprise-transformation/legacy-modernization" component={LegacyModernization} />
          <Route path="/solutions/enterprise-transformation/cloud-infrastructure" component={CloudInfrastructure} />
          <Route path="/solutions/enterprise-transformation/api-integration" component={APIIntegration} />
          <Route path="/solutions/enterprise-transformation/devops-automation" component={DevOpsAutomation} />
          <Route path="/solutions/enterprise-transformation/technology-strategy" component={TechnologyStrategy} />
          <Route path="/solutions/enterprise-transformation/cost-optimization" component={CostOptimization} />
          <Route path="/solutions/enterprise-transformation/security-compliance" component={SecurityCompliance} />
        <Route path="/solutions/customer-intelligence" component={CustomerIntelligence} />
          <Route path="/solutions/customer-intelligence/personalization" component={Personalization} />
          <Route path="/solutions/customer-intelligence/customer-data-platform" component={CICustomerDataPlatform} />
          <Route path="/solutions/customer-intelligence/customer-insights" component={CustomerInsights} />
          <Route path="/solutions/customer-intelligence/customer-journey-map" component={CustomerJourneyMap} />
        <Route path="/solutions/digital-engagement" component={DigitalEngagement} />
        <Route path="/solutions/digital-experience-platform" component={DigitalExperiencePlatform} />
        <Route path="/solutions/conversational-ai" component={ConversationalAI} />
        <Route path="/solutions/mobile-apps" component={MobileApps} />
        <Route path="/solutions/headless-cms" component={HeadlessCMS} />
        <Route path="/solutions/intelligent-process-optimization" component={IntelligentProcessOptimization} />
        <Route path="/solutions/data-driven-customer-intelligence" component={DataDrivenCustomerIntelligence} />
        <Route path="/solutions/data-driven-customer-intelligence/case-studies" component={CustomerIntelligenceCaseStudies} />
        <Route path="/solutions/data-driven-customer-intelligence/case-studies/ecommerce-repeat-purchase" component={CIEcommerceRepeatPurchase} />
        <Route path="/solutions/data-driven-customer-intelligence/case-studies/saas-churn-reduction" component={CISaasChurnReduction} />
        <Route path="/solutions/data-driven-customer-intelligence/case-studies/bank-cross-sell" component={CIBankCrossSell} />
        <Route path="/solutions/data-driven-customer-intelligence/insights" component={CustomerIntelligenceInsights} />
        <Route path="/solutions/data-driven-customer-intelligence/insights/beyond-segmentation" component={CIBeyondSegmentation} />
        <Route path="/solutions/data-driven-customer-intelligence/insights/churn-prediction-playbook" component={CIChurnPredictionPlaybook} />
        <Route path="/solutions/data-driven-customer-intelligence/insights/hyper-personalization" component={CIHyperPersonalization} />
        <Route path="/solutions/customer-intelligence/predictive-analytics-modeling" component={CIPredictiveAnalyticsModeling} />
        <Route path="/solutions/customer-intelligence/behavioral-segmentation" component={CIBehavioralSegmentation} />
        <Route path="/solutions/customer-intelligence/journey-analytics-optimization" component={CIJourneyAnalyticsOptimization} />
        <Route path="/solutions/customer-intelligence/personalization-strategy" component={CIPersonalizationStrategy} />
        <Route path="/solutions/customer-intelligence/voice-of-customer" component={CIVoiceOfCustomer} />
        <Route path="/solutions/customer-intelligence/ai-powered-recommendations" component={CIAIPoweredRecommendations} />
        <Route path="/solutions/scalable-enterprise-transformation" component={ScalableEnterpriseTransformation} />
        <Route path="/solutions/enterprise-transformation/cloud-migration-architecture" component={SETCloudMigrationArchitecture} />
        <Route path="/solutions/enterprise-transformation/infrastructure-modernization" component={SETInfrastructureModernization} />
        <Route path="/solutions/enterprise-transformation/platform-engineering" component={SETPlatformEngineering} />
        <Route path="/solutions/enterprise-transformation/devops-cicd" component={SETDevOpsCICD} />
        <Route path="/solutions/enterprise-transformation/security-and-compliance" component={SETSecurityCompliance} />
        <Route path="/solutions/enterprise-transformation/data-platform-engineering" component={SETDataPlatformEngineering} />
        <Route path="/solutions/enterprise-transformation/cloud-cost-optimization" component={SETCloudCostOptimization} />
        <Route path="/solutions/enterprise-transformation/technology-due-diligence" component={SETTechnologyDueDiligence} />
        <Route path="/cases/healthcare-cloud-migration" component={HealthcareCloudMigration} />
        <Route path="/cases/fintech-microservices" component={FintechMicroservices} />
        <Route path="/cases/media-streaming-scale" component={MediaStreamingScale} />
        <Route path="/insights/enterprise-transformation-ai" component={EnterpriseTransformationAI} />
        <Route path="/insights/scalable-data-architecture" component={ScalableDataArchitecture} />
        <Route path="/insights/enterprise-integration-playbook" component={EnterpriseIntegrationPlaybook} />
        <Route path="/solutions/accelerating-business-growth" component={AcceleratingBusinessGrowthSolution} />
        <Route path="/solutions/business-growth/ecommerce-strategy-launch" component={ABGECommerceStrategyLaunch} />
        <Route path="/solutions/business-growth/digital-product-development" component={ABGDigitalProductDevelopment} />
        <Route path="/solutions/business-growth/growth-marketing-acquisition" component={ABGGrowthMarketingAcquisition} />
        <Route path="/solutions/business-growth/pricing-monetization-strategy" component={ABGPricingMonetizationStrategy} />
        <Route path="/solutions/business-growth/go-to-market-acceleration" component={ABGGoToMarketAcceleration} />
        <Route path="/solutions/business-growth/revenue-operations-analytics" component={ABGRevenueOperationsAnalytics} />
        <Route path="/cases/retail-ecommerce-growth" component={CaseStudyRetailEcommerce} />
        <Route path="/cases/training-subscription-platform" component={CaseStudyTrainingSubscription} />
        <Route path="/cases/b2b-digital-ordering" component={CaseStudyB2BDigitalOrdering} />
        <Route path="/insights/digital-channels-growth" component={InsightDigitalChannelsGrowth} />
        <Route path="/insights/subscription-economy-playbook" component={InsightSubscriptionPlaybook} />
        <Route path="/insights/ecommerce-launch-guide" component={InsightEcommerceLaunchGuide} />
        <Route path="/insights/digital-growth-playbook" component={DigitalGrowthPlaybook} />
        <Route path="/insights/ecommerce-economics" component={EcommerceEconomics} />
        <Route path="/insights/marketplace-playbook" component={MarketplacePlaybook} />
        <Route path="/solutions/enterprise-transformation" component={EnterpriseTransformation} />
        <Route path="/solutions/enterprise-transformation-hub" component={EnterpriseTransformationHub} />
        <Route path="/solutions/cloud-infrastructure" component={CloudInfrastructure} />
        <Route path="/solutions/api-integration" component={APIIntegration} />
        <Route path="/solutions/devops-automation" component={DevOpsAutomation} />
        <Route path="/solutions/business-growth/ecommerce-platforms" component={EcommercePlatforms} />
        <Route path="/solutions/business-growth/conversion-optimization" component={ConversionOptimization} />
        <Route path="/capabilities/business-building" component={BusinessBuilding} />
        <Route path="/capabilities/business-building/insights" component={BusinessBuildingInsights} />
        <Route path="/capabilities/business-building/case-studies" component={BusinessBuildingCaseStudies} />
        <Route path="/capabilities/business-building/insights/digital-venture-playbook" component={DigitalVenturePlaybook} />
        <Route path="/capabilities/business-building/case-studies/ecommerce-platform-launch" component={EcommercePlatformLaunch} />
        <Route path="/capabilities/business-building/case-studies/distributor-marketplace" component={DistributorMarketplace} />
        <Route path="/capabilities/business-building/case-studies/consulting-saas" component={ConsultingSaaS} />
        <Route path="/capabilities/business-building/case-studies/manufacturer-dtc" component={ManufacturerDTC} />
        <Route path="/capabilities/business-building/case-studies/healthcare-telehealth" component={HealthcareTelehealth} />
        <Route path="/capabilities/business-building/case-studies/logistics-tech-spinoff" component={LogisticsTechSpinoff} />
        <Route path="/capabilities/business-building/case-studies/wealth-adjacent" component={WealthAdjacent} />
        <Route path="/capabilities/business-building/digital-venture-launch" component={DigitalVentureLaunch} />
        <Route path="/capabilities/business-building/product-strategy-design" component={ProductStrategyDesign} />
        <Route path="/capabilities/business-building/growth-scaling" component={GrowthScaling} />
        <Route path="/capabilities/business-building/ai-powered-acceleration" component={AIPoweredAcceleration} />
        <Route path="/capabilities/business-building/distinctive-expertise" component={DistinctiveExpertise} />
        <Route path="/capabilities/business-building/go-to-market-scale" component={GoToMarketScale} />
        <Route path="/capabilities/business-building/digital-transformation-accelerator" component={DigitalTransformationAccelerator} />
        <Route path="/capabilities/business-building/rapid-innovation-testing" component={RapidInnovationTesting} />
        <Route path="/capabilities/business-building/performance-intelligence-benchmarking" component={PerformanceIntelligenceBenchmarking} />
        <Route path="/venture-portfolio" component={VenturePortfolio} />
        <Route path="/tools/growth-simulator" component={GrowthSimulator} />
        <Route path="/capabilities/growth-marketing-sales" component={GrowthMarketingSales} />
        <Route path="/capabilities/growth-marketing-sales/insights" component={GrowthMarketingInsights} />
        <Route path="/capabilities/growth-marketing-sales/case-studies" component={GrowthMarketingCaseStudies} />
        <Route path="/capabilities/growth-marketing-sales/case-studies/b2b-digital-marketing" component={B2BDigitalMarketing} />
        <Route path="/capabilities/growth-marketing-sales/case-studies/software-sales-optimization" component={SoftwareSalesOptimization} />
        <Route path="/capabilities/growth-marketing-sales/case-studies/subscription-retention" component={SubscriptionRetention} />
        <Route path="/capabilities/growth-marketing-sales/case-studies/manufacturer-ecommerce" component={ManufacturerEcommerce} />
        <Route path="/capabilities/growth-marketing-sales/case-studies/distribution-pricing" component={DistributionPricing} />
        <Route path="/capabilities/growth-marketing-sales/case-studies/tech-abm" component={TechABM} />
        <Route path="/capabilities/growth-marketing-sales/consumer-shopper-insights" component={ConsumerShopperInsights} />
        <Route path="/capabilities/growth-marketing-sales/ecommerce" component={EcommerceCapability} />
        <Route path="/capabilities/growth-marketing-sales/ecommerce/platform-strategy" component={PlatformStrategy} />
        <Route path="/capabilities/growth-marketing-sales/ecommerce/cro" component={CRO} />
        <Route path="/capabilities/growth-marketing-sales/ecommerce/marketplace-management" component={MarketplaceManagement} />
        <Route path="/capabilities/growth-marketing-sales/growth-strategy" component={GrowthStrategy} />
        <Route path="/capabilities/growth-marketing-sales/commercial-architecture" component={CommercialArchitecture} />
        <Route path="/capabilities/growth-marketing-sales/portfolio-optimization" component={PortfolioOptimization} />
        <Route path="/capabilities/growth-marketing-sales/green-growth" component={GreenGrowth} />
        <Route path="/capabilities/growth-marketing-sales/customer-experience" component={CustomerExperience} />
        <Route path="/capabilities/growth-marketing-sales/service-design" component={ServiceDesign} />
        <Route path="/capabilities/growth-marketing-sales/personalization-at-scale" component={PersonalizationAtScale} />
        <Route path="/capabilities/growth-marketing-sales/pricing-monetization" component={PricingMonetization} />
        <Route path="/capabilities/growth-marketing-sales/pricing-monetization/dynamic-pricing" component={DynamicPricing} />
        <Route path="/capabilities/growth-marketing-sales/pricing-monetization/packaging-bundling" component={PackagingBundling} />
        <Route path="/capabilities/growth-marketing-sales/pricing-monetization/discount-optimization" component={DiscountOptimization} />
        <Route path="/capabilities/growth-marketing-sales/brand-strategy" component={BrandStrategyCore} />
        <Route path="/capabilities/growth-marketing-sales/brand-storytelling" component={BrandStorytelling} />
        <Route path="/capabilities/growth-marketing-sales/digital-marketing" component={DigitalMarketing} />
        <Route path="/capabilities/growth-marketing-sales/digital-marketing/performance-marketing" component={PerformanceMarketing} />
        <Route path="/capabilities/growth-marketing-sales/digital-marketing/analytics-attribution" component={AnalyticsAttribution} />
        <Route path="/capabilities/growth-marketing-sales/digital-marketing/brand-strategy" component={BrandStrategy} />
        <Route path="/capabilities/growth-marketing-sales/sales-excellence" component={SalesExcellence} />
        <Route path="/capabilities/growth-marketing-sales/sales-excellence/sales-operations" component={SalesOperations} />
        <Route path="/capabilities/growth-marketing-sales/sales-excellence/go-to-market" component={GoToMarket} />
        <Route path="/capabilities/growth-marketing-sales/sales-excellence/channel-partners" component={ChannelPartners} />
        <Route path="/capabilities/growth-marketing-sales/insights-analytics" component={InsightsAnalytics} />
        <Route path="/solutions/sales-transformation" component={SalesTransformation} />
        <Route path="/insights/headless-commerce-guide" component={HeadlessCommerceGuide} />
        <Route path="/insights/ai-in-ecommerce" component={AIInEcommerce} />
        <Route path="/insights/mobile-commerce-optimization" component={MobileCommerceOptimization} />
        <Route path="/insights/future-of-performance-marketing" component={FutureOfPerformanceMarketing} />
        <Route path="/insights/ai-driven-brand-strategy" component={AIDrivenBrandStrategy} />
        <Route path="/insights/hyper-personalization-at-scale" component={HyperPersonalizationAtScale} />
        <Route path="/insights/psychology-of-value" component={PsychologyOfValue} />
        <Route path="/insights/algorithmic-pricing-smes" component={AlgorithmicPricingSMEs} />
        <Route path="/insights/subscription-pricing-models" component={SubscriptionPricingModels} />
        <Route path="/insights/ai-sales-forecasting" component={AISalesForecasting} />
        <Route path="/insights/modern-sales-stack" component={ModernSalesStack} />
        <Route path="/insights/algorithmic-territory-planning" component={AlgorithmicTerritoryPlanning} />
        <Route path="/cases" component={Cases} />
        <Route path="/cases/healthcare-data-platform" component={HealthcareDataPlatform} />
        <Route path="/cases/retailer-ml-forecasting" component={RetailerMLForecasting} />
        {/* Old route removed - using industry case study */}
        <Route path="/cases/manufacturer-data-monetization" component={ManufacturerDataMonetization} />
        <Route path="/cases/insurance-analytics-backlog" component={InsuranceAnalyticsBacklog} />
        <Route path="/cases/healthcare-data-maturity" component={HealthcareDataMaturity} />
        <Route path="/cases/logistics-operations-dashboard" component={LogisticsOperationsDashboard} />
        <Route path="/cases/saas-product-analytics" component={SaaSProductAnalytics} />
        <Route path="/cases/manufacturing-predictive-maintenance" component={ManufacturingPredictiveMaintenance} />
        <Route path="/cases/global-retailer" component={GlobalRetailer} />
        <Route path="/cases/financial-institution" component={FinancialInstitution} />
        <Route path="/cases/healthcare-provider" component={HealthcareProvider} />
        {/* Homepage Case Studies - BCG/McKinsey Style */}
        <Route path="/cases/global-retailer-ecommerce" component={GlobalRetailerEcommerce} />
        <Route path="/cases/financial-institution-automation" component={FinancialInstitutionAutomation} />
        <Route path="/cases/healthcare-provider-ai" component={HealthcareProviderAI} />
        <Route path="/cases/law-firm-automation" component={CaseStudyLawFirm} />
        <Route path="/cases/law-firm-contract-automation" component={CaseStudyLawFirm} />
        <Route path="/cases/healthcare-patient-automation" component={CaseStudyHealthcarePatient} />
        <Route path="/cases/healthcare-patient-engagement" component={CaseStudyHealthcarePatient} />
        <Route path="/cases/healthcare-ehr-modernization" component={CaseStudyHealthcareEHRModernization} />
        <Route path="/cases/bank-process-automation" component={CaseStudyBankProcess} />
        <Route path="/cases/bank-core-modernization" component={CaseStudyBankCoreModernization} />
        <Route path="/cases/consulting-knowledge-management" component={CaseStudyConsultingKnowledge} />
        {/* Old route removed - using industry case study */}
        <Route path="/cases/fintech-payment-integration" component={CaseStudyFintechPayment} />
        <Route path="/cases/legal-doc-intelligence" component={CaseStudyLegalDocIntel} />
        <Route path="/cases/telehealth-scaling" component={CaseStudyTelehealthScaling} />
        {/* Old route removed - using industry case study */}
        <Route path="/cases/healthcare-analytics" component={CaseStudyHealthcareAnalytics} />
        <Route path="/cases/accounting-audit" component={CaseStudyAccountingAudit} />
        <Route path="/cases/hospital-workflow" component={CaseStudyHospitalWorkflow} />
        <Route path="/cases/hospital-clinical-workflow" component={CaseStudyHospitalWorkflow} />
        <Route path="/cases/insurance-claims-processing" component={CaseStudyInsuranceClaims} />
        <Route path="/cases/accounting-audit-automation" component={CaseStudyAccountingAudit} />
        <Route path="/cases/fintech-payment-automation" component={CaseStudyFintechPayment} />
        <Route path="/cases/legal-document-intelligence" component={CaseStudyLegalDocIntel} />
        <Route path="/cases/telehealth-platform" component={CaseStudyTelehealthScaling} />
        <Route path="/cases/wealth-management-automation" component={CaseStudyWealthOnboarding} />
        <Route path="/cases/saas-platform-optimization" component={SaasCaseStudy} />
        <Route path="/cases/healthcare-patient-intake" component={HealthcarePatientIntake} />
        <Route path="/cases/logistics-driver-experience" component={LogisticsDriverExperience} />
        <Route path="/cases/streaming-recommendation-engine" component={StreamingRecommendationEngine} />
        <Route path="/cases/financial-services-email" component={FinancialServicesEmail} />
        <Route path="/cases/retail-loyalty-program" component={RetailLoyaltyProgram} />
        <Route path="/cases/retail-modernization-personalization" component={RetailModernizationPersonalization} />
        <Route path="/cases/payment-terminal-onboarding" component={PaymentTerminalOnboarding} />
        <Route path="/cases/logistics-product-access" component={LogisticsProductAccess} />
        <Route path="/cases/logistics-brand-consolidation" component={LogisticsBrandConsolidation} />
        <Route path="/cases/marketing-conversion-boost" component={MarketingConversionBoost} />
        <Route path="/cases/customer-profitability" component={CustomerProfitability} />
        <Route path="/cases/consumer-decision-journey" component={ConsumerDecisionJourney} />
        <Route path="/insights/ai-automation-reshaping-business" component={BlogAIAutomation} />
        <Route path="/insights/digital-transformation-readiness" component={BlogDigitalTransformation} />
        <Route path="/insights/measuring-automation-roi" component={BlogROIMeasurement} />
        <Route path="/cases/financial-services-sql-bootcamp" component={FinancialServicesSQLBootcamp} />
        <Route path="/cases/retailer-data-academy" component={RetailerDataAcademy} />
        <Route path="/cases/healthcare-dashboard-training" component={HealthcareDashboardTraining} />
        <Route path="/cases/retail-demand-forecasting" component={RetailDemandForecasting} />
        <Route path="/cases/telecom-churn-prediction" component={TelecomChurnPrediction} />
        <Route path="/cases/financial-fraud-detection-ml" component={FinancialFraudDetectionML} />
        <Route path="/cases/healthcare-hipaa-compliance" component={HealthcareHIPAACompliance} />
        <Route path="/cases/financial-data-quality" component={FinancialDataQuality} />
        <Route path="/cases/retail-gdpr-compliance" component={RetailGDPRCompliance} />
        <Route path="/cases/media-company-dam" component={MediaCompanyDAM} />
        <Route path="/cases/retail-product-content" component={RetailProductContent} />
        <Route path="/cases/healthcare-content-compliance" component={HealthcareContentCompliance} />
        <Route path="/cases/fintech-data-pipeline" component={FintechDataPipeline} />
        <Route path="/cases/ecommerce-data-warehouse" component={EcommerceDataWarehouse} />
        <Route path="/cases/manufacturing-iot-pipeline" component={ManufacturingIoTPipeline} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/case-studies/energy-grid-security" component={EnergyGridSecurity} />
        <Route path="/case-studies/airline-maintenance-analytics" component={AirlineMaintenance} />
        <Route path="/case-studies/retail-shrinkage-reduction" component={RetailShrinkage} />
        <Route path="/case-studies/insurance-climate-risk" component={InsuranceClimateRisk} />
        <Route path="/case-studies/semiconductor-design-twin" component={SemiconductorDesignTwin} />
        <Route path="/case-studies/mobility-model-city" component={MobilityModelCity} />
        <Route path="/case-studies/software-coding-assistants" component={SoftwareCodingAssistant} />
        <Route path="/case-studies/media-content-production" component={MediaContentGenAI} />
        <Route path="/case-studies/logistics-cold-chain" component={LogisticsColdChain} />
        <Route path="/case-studies/financial-compliance-automation" component={FinancialComplianceAI} />
        <Route path="/case-studies/software-specialized-coding" component={SpecializedCodingAssistant} />
        <Route path="/case-studies/retail-inventory-optimization" component={RetailCaseStudy} />
        <Route path="/case-studies/insurance-claims-automation" component={InsuranceCaseStudy} />
        <Route path="/case-studies/technology-devops-transformation" component={TechnologyCaseStudy} />
        <Route path="/cases/healthcare-patient-portal" component={HealthcarePatientPortal} />
        <Route path="/cases/retail-inventory-app" component={RetailInventoryApp} />
        <Route path="/cases/fintech-mobile-banking" component={FintechMobileBanking} />
        <Route path="/cases/insurance-claims-portal" component={InsuranceClaimsPortal} />
        <Route path="/cases/logistics-tracking-app" component={LogisticsTrackingApp} />
        <Route path="/cases/municipal-permit-system" component={MunicipalPermitSystem} />
        <Route path="/insights/why-intelligent-automation" component={WhyIntelligentAutomation} />
        <Route path="/insights/ai-agents-transform-operations" component={AIAgentsTransformOperations} />
        <Route path="/insights/ai-economic-impact" component={AIEconomicImpact} />
        <Route path="/insights/process-mining-guide" component={ProcessMiningGuide} />
        {/* Homepage Insights - BCG/McKinsey Style */}
        <Route path="/insights/why-intelligent-automation-isnt-optional-anymore" component={WhyIntelligentAutomationInsight} />
        <Route path="/insights/how-ai-agents-transform-enterprise-operations" component={HowAIAgentsTransformInsight} />
        <Route path="/insights/complete-guide-process-mining" component={CompleteGuideProcessMiningInsight} />
        <Route path="/insights/ceo-guide-data-modernization" component={CeoGuideDataModernization} />
        <Route path="/insights/building-data-culture" component={BuildingDataCulture} />
        <Route path="/insights/cloud-native-architecture" component={CloudNativeArchitecture} />
        <Route path="/insights/data-lake-to-value-stream" component={DataLakeToValueStream} />
        <Route path="/insights/corporate-venture-advantage" component={CorporateVentureAdvantage} />
        <Route path="/insights/from-mvp-to-scale" component={FromMVPToScale} />
        <Route path="/insights/hiring-for-builders" component={HiringForBuilders} />
        <Route path="/insights/generative-supply-chain" component={GenerativeSupplyChain} />
        <Route path="/insights/digital-twin-manufacturing" component={DigitalTwinManufacturing} />
        <Route path="/insights/iot-resilient-supply-chain" component={IoTResilientSupplyChain} />
        <Route path="/insights/beyond-segmentation" component={BeyondSegmentation} />
        <Route path="/insights/privacy-by-design" component={PrivacyByDesign} />
        <Route path="/insights/real-time-decision-architectures" component={RealTimeDecisionArchitectures} />
        <Route path="/insights/green-growth-imperative" component={GreenGrowthImperative} />
          <Route path="/capabilities/growth-marketing-sales/green-growth/energy-materials" component={EnergyMaterials} />
          <Route path="/capabilities/growth-marketing-sales/green-growth/consumer-goods" component={ConsumerGoods} />
          <Route path="/capabilities/growth-marketing-sales/green-growth/advanced-manufacturing" component={AdvancedManufacturing} />
          <Route path="/insights/net-zero-transition" component={NetZeroTransition} />
          <Route path="/insights/carbon-markets" component={CarbonMarkets} />
          <Route path="/insights/green-materials" component={GreenMaterials} />
        <Route path="/insights/market-entry-architecture" component={MarketEntryArchitecture} />
        <Route path="/insights/commercial-due-diligence" component={CommercialDueDiligence} />
        <Route path="/insights/value-proposition-design" component={ValuePropositionDesign} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations" component={MarketingOperations} />
            <Route path="/insights/future-of-marketing-ops" component={FutureOfMarketingOps} />
            <Route path="/insights/no-code-marketing-automation" component={NoCodeMarketingAutomation} />
            <Route path="/insights/marketing-data-roi" component={MarketingDataROI} />
        <Route path="/capabilities/growth-marketing-sales/martech-stack" component={MarTechStack} />
            <Route path="/insights/composable-architecture" component={ComposableArchitecture} />
            <Route path="/insights/middleware-patterns" component={MiddlewarePatterns} />
            <Route path="/insights/vendor-selection" component={VendorSelection} />
            <Route path="/capabilities/growth-marketing-sales/martech-stack/stack-orchestration" component={StackOrchestration} />
            <Route path="/capabilities/growth-marketing-sales/martech-stack/semantic-infrastructure" component={SemanticInfrastructure} />
            <Route path="/capabilities/growth-marketing-sales/martech-stack/middleware-strategy" component={MiddlewareStrategy} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations/crm-implementation" component={CRMImplementation} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations/marketing-automation" component={MarketingAutomation} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations/data-integration-dashboards" component={DataIntegrationDashboards} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations/marketing-roi" component={MarketingROI} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations/martech-assessment" component={MartechAssessment} />
        <Route path="/capabilities/growth-marketing-sales/marketing-operations/campaign-analytics" component={CampaignAnalytics} />
        <Route path="/capabilities/growth-marketing-sales/retention-loyalty" component={RetentionLoyalty} />
        <Route path="/capabilities/growth-marketing-sales/retention-loyalty/churn-prediction" component={ChurnPrediction} />
        <Route path="/capabilities/growth-marketing-sales/retention-loyalty/loyalty-program" component={LoyaltyProgram} />
        <Route path="/capabilities/growth-marketing-sales/retention-loyalty/customer-health" component={CustomerHealth} />
          <Route path="/capabilities/strategy-corporate-finance" component={StrategyCorporateFinance} />
          <Route path="/capabilities/strategy-corporate-finance/insights" component={StrategyFinanceInsights} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies" component={StrategyFinanceCaseStudies} />
          <Route path="/capabilities/strategy-corporate-finance/insights/cfo-guide-ai-investment" component={CFOGuideAIInvestment} />
          <Route path="/capabilities/strategy-corporate-finance/insights/strategic-finance-guide" component={StrategicFinanceGuide} />
          <Route path="/capabilities/strategy-corporate-finance/insights/capital-raising-2026" component={CapitalRaising2026} />
          <Route path="/capabilities/strategy-corporate-finance/insights/ma-playbook" component={MAPlaybook} />
          <Route path="/capabilities/strategy-corporate-finance/insights/fpa-excellence" component={FPAExcellence} />
          <Route path="/capabilities/strategy-corporate-finance/insights/pricing-strategy" component={PricingStrategy} />
          <Route path="/capabilities/strategy-corporate-finance/insights/working-capital" component={WorkingCapital} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies/pe-growth-healthcare" component={PEGrowthHealthcare} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies/manufacturing-acquisition" component={ManufacturingAcquisition} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies/distribution-fpa" component={DistributionFPA} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies/saas-series-b" component={SaaSSeriesB} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies/retail-turnaround" component={RetailTurnaround} />
          <Route path="/capabilities/strategy-corporate-finance/case-studies/services-exit" component={ServicesExit} />
          <Route path="/capabilities/operations" component={Operations} />
          <Route path="/capabilities/operations/insights" component={OperationsInsights} />
          <Route path="/capabilities/operations/case-studies" component={OperationsCaseStudies} />
          <Route path="/capabilities/operations/case-studies/consumer-goods-supply-chain" component={ConsumerGoodsSupplyChain} />
          <Route path="/capabilities/operations/case-studies/ecommerce-fulfillment" component={EcommerceFulfillment} />
          <Route path="/capabilities/operations/case-studies/aerospace-quality" component={AerospaceQuality} />
          <Route path="/capabilities/operations/case-studies/distribution-warehouse" component={DistributionWarehouse} />
          <Route path="/capabilities/operations/case-studies/food-production-planning" component={FoodProductionPlanning} />
          <Route path="/capabilities/operations/case-studies/healthcare-workforce" component={HealthcareWorkforce} />
          <Route path="/capabilities/operations/insights/supply-chain-resilience" component={SupplyChainResilience} />
          <Route path="/capabilities/operations/insights/lean-operations" component={LeanOperations} />
          <Route path="/capabilities/operations/insights/automation-roi" component={AutomationROI} />
          <Route path="/capabilities/operations/insights/quality-systems" component={QualitySystems} />
          <Route path="/capabilities/operations/insights/workforce-planning" component={WorkforcePlanning} />
          <Route path="/capabilities/operations/insights/operational-metrics" component={OperationalMetrics} />
          <Route path="/capabilities/operations/supply-chain" component={SupplyChainOptimization} />
          <Route path="/capabilities/operations/quality-management" component={QualityManagement} />
          <Route path="/capabilities/operations/production-optimization" component={ProductionOptimization} />
          <Route path="/capabilities/operations/workforce-optimization" component={WorkforceOptimization} />
          <Route path="/capabilities/operations/performance-analytics" component={PerformanceAnalytics} />
          <Route path="/capabilities/operations/process-automation" component={ProcessAutomation} />
          <Route path="/capabilities/operations/strategic-procurement" component={StrategicProcurement} />
          <Route path="/capabilities/operations/service-operations" component={ServiceOperations} />
          <Route path="/capabilities/operations/product-development" component={ProductDevelopment} />
      <Route path="/capabilities/strategy-corporate-finance/cfo-services" component={FractionalCFO} />
      <Route path="/capabilities/strategy-corporate-finance/financial-planning-analysis" component={FinancialPlanningAnalysis} />
      <Route path="/capabilities/strategy-corporate-finance/fpa" component={FinancialPlanningAnalysis} />
        <Route path="/case-studies/fpa-scenario-planning" component={FPACaseStudy} />
      <Route path="/capabilities/strategy-corporate-finance/capital-raising" component={CapitalRaising} />
      <Route path="/capabilities/strategy-corporate-finance/mergers-acquisitions" component={MergersAcquisitions} />
      <Route path="/capabilities/strategy-corporate-finance/business-strategy" component={BusinessStrategy} />
      <Route path="/capabilities/strategy-corporate-finance/performance-improvement" component={PerformanceImprovement} />
      <Route path="/capabilities/strategy-corporate-finance/ai-powered-finance" component={AIPoweredFinance} />
        <Route path="/case-studies/fractional-cfo" component={FractionalCFOCaseStudies} />
        <Route path="/case-studies/fractional-cfo/predictive-revenue" component={CaseStudyPredictiveRevenue} />
        <Route path="/case-studies/fractional-cfo/variance-analysis" component={CaseStudyVarianceAnalysis} />
        <Route path="/case-studies/fractional-cfo/executive-dashboards" component={CaseStudyExecutiveDashboards} />
        <Route path="/case-studies/medical-device-growth" component={MedicalDeviceGrowth} />
        <Route path="/case-studies/retail-market-expansion" component={RetailMarketExpansion} />
        <Route path="/case-studies/saas-category-leadership" component={SaasCategoryLeadership} />
        <Route path="/insights/why-nps-is-a-vanity-metric" component={WhyNPSIsAVanityMetric} />
        <Route path="/insights/churn-prediction-playbook" component={ChurnPredictionPlaybook} />
        <Route path="/insights/economics-of-loyalty" component={EconomicsOfLoyalty} />
        <Route path="/insights/series-a-fundraising-guide" component={SeriesAFundraisingGuide} />
        <Route path="/insights/valuation-mistakes" component={ValuationMistakes} />
        <Route path="/insights/pitch-deck-design" component={PitchDeckDesign} />
        <Route path="/insights/due-diligence-checklist" component={DueDiligenceChecklist} />
        <Route path="/insights/ma-failure-analysis" component={MAFailureAnalysis} />
        <Route path="/insights/integration-playbook" component={IntegrationPlaybook} />
        <Route path="/insights/ma-commercial-due-diligence" component={MACommercialDueDiligence} />
        <Route path="/insights/synergy-capture" component={SynergyCapture} />
        <Route path="/insights/business-transformation-strategy" component={BusinessTransformationStrategy} />
        <Route path="/insights/performance-improvement-framework" component={PerformanceImprovementFramework} />
        <Route path="/case-studies/digital-transformation-manufacturing" component={DigitalTransformationManufacturing} />
        <Route path="/case-studies/operational-excellence-healthcare" component={OperationalExcellenceHealthcare} />
        <Route path="/case-studies/strategic-repositioning-technology" component={StrategicRepositioningTechnology} />
        <Route path="/case-studies/fpa-transformation" component={FPATransformation} />
        <Route path="/case-studies/series-b-funding" component={SeriesBFunding} />
        <Route path="/case-studies/healthcare-funding" component={HealthcareFunding} />
        <Route path="/case-studies/manufacturing-growth-equity" component={ManufacturingGrowthEquity} />
        <Route path="/case-studies/post-merger-integration" component={PostMergerIntegration} />
        <Route path="/case-studies/strategic-acquisition" component={StrategicAcquisition} />
        <Route path="/case-studies/carve-out-transaction" component={CarveOutTransaction} />
        <Route path="/case-studies/professional-services-growth" component={ProfessionalServicesGrowth} />
        <Route path="/case-studies/distribution-restructuring" component={DistributionRestructuring} />
        <Route path="/case-studies/healthcare-transformation" component={HealthcareTransformation} />
        <Route path="/case-studies/manufacturing-cost-reduction" component={ManufacturingCostReduction} />
        <Route path="/case-studies/distribution-working-capital" component={DistributionWorkingCapital} />
        <Route path="/case-studies/ecommerce-operations" component={EcommerceOperations} />
        <Route path="/insights/rolling-forecasts" component={RollingForecasts} />
        <Route path="/insights/kpi-dashboards" component={KPIDashboards} />
        <Route path="/insights/cfo-data-integration" component={CFODataIntegration} />
        <Route path="/insights/smart-cost-reduction" component={SmartCostReduction} />
        <Route path="/insights/working-capital-optimization" component={WorkingCapitalOptimization} />
        <Route path="/insights/lean-operations-scale" component={LeanOperationsScale} />
        <Route path="/insights/financial-discipline-growth" component={FinancialDisciplineGrowth} />
        <Route path="/insights/cfo-cash-flow-guide" component={CFOCashFlowGuide} />
        <Route path="/insights/investor-ready-board-decks" component={InvestorReadyBoardDecks} />
        <Route path="/insights/strategic-plans-success" component={StrategicPlansSuccess} />
        <Route path="/insights/operating-model-redesign" component={OperatingModelRedesign} />
        <Route path="/insights/portfolio-management" component={PortfolioManagementInsight} />
        <Route path="/insights/mid-market-ai-guide" component={MidMarketAIGuide} />
        <Route path="/insights/scaling-operations" component={ScalingOperationsInsight} />
        <Route path="/insights/customer-intelligence" component={CustomerIntelligenceInsight} />
        <Route path="/insights" component={Insights} />
        <Route path="/industries" component={Industries} />
        <Route path="/industries/manufacturing" component={ManufacturingIndustry} />
        <Route path="/industries/healthcare" component={HealthcareIndustry} />
        <Route path="/industries/financial-services" component={FinancialServicesIndustry} />
        <Route path="/industries/retail" component={RetailIndustry} />
        <Route path="/industries/aerospace-defense" component={AerospaceDefenseIndustry} />
        <Route path="/industries/automotive" component={AutomotiveIndustry} />
        <Route path="/industries/consumer-products" component={ConsumerProductsIndustry} />
        <Route path="/industries/education" component={EducationIndustry} />
        <Route path="/industries/energy-utilities" component={EnergyUtilitiesIndustry} />
        <Route path="/industries/insurance" component={InsuranceIndustry} />
        <Route path="/industries/private-equity" component={PrivateEquityIndustry} />
        <Route path="/industries/public-sector" component={PublicSectorIndustry} />
        <Route path="/industries/technology-media-telecom" component={TechnologyMediaTelecomIndustry} />
        <Route path="/industries/transportation-logistics" component={TransportationLogisticsIndustry} />
        <Route path="/industries/travel-hospitality" component={TravelHospitalityIndustry} />
        <Route path="/industries/urban-development" component={UrbanDevelopmentIndustry} />
        {/* Industry Case Study Routes */}
        <Route path="/cases/financial-fraud-detection" component={FinancialFraudDetectionIndustry} />
        <Route path="/cases/bank-cross-sell" component={BankCrossSellIndustry} />
        <Route path="/cases/wealth-onboarding" component={WealthOnboardingIndustry} />
        <Route path="/cases/healthcare-transformation" component={HealthcareTransformationIndustry} />
        <Route path="/cases/healthcare-readmission" component={HealthcareReadmissionIndustry} />
        <Route path="/cases/healthcare-revenue-cycle" component={HealthcareRevenueCycleIndustry} />
        <Route path="/cases/automotive-smart-factory" component={AutomotiveSmartFactoryIndustry} />
        <Route path="/cases/semiconductor-quality-prediction" component={SemiconductorQualityPredictionIndustry} />
        <Route path="/cases/industrial-connected-products" component={IndustrialConnectedProductsIndustry} />
        <Route path="/cases/fashion-retail-digital-transformation" component={FashionRetailTransformationIndustry} />
        <Route path="/cases/grocery-demand-forecasting" component={GroceryDemandForecastingIndustry} />
        <Route path="/cases/retail-loyalty-transformation" component={RetailLoyaltyTransformationIndustry} />
        <Route path="/cases/media-streaming-launch" component={MediaStreamingLaunchIndustry} />
        <Route path="/cases/tech-engineering-transformation" component={TechEngineeringTransformationIndustry} />
        <Route path="/cases/telecom-customer-experience" component={TelecomCustomerExperienceIndustry} />
        <Route path="/cases/utility-grid-modernization" component={UtilityGridModernizationIndustry} />
        <Route path="/cases/renewable-energy-forecasting" component={RenewableEnergyForecastingIndustry} />
        <Route path="/cases/oil-gas-digital-transformation" component={OilGasDigitalTransformationIndustry} />
        <Route path="/cases/power-generation-predictive-maintenance" component={PowerGenerationPredictiveMaintenanceIndustry} />
        <Route path="/cases/food-beverage-demand-forecasting" component={FoodBeverageDemandForecastingIndustry} />
        <Route path="/cases/consumer-electronics-demand-optimization" component={ConsumerElectronicsDemandOptimizationIndustry} />
        <Route path="/cases/retail-assortment-optimization" component={RetailAssortmentOptimizationIndustry} />
        <Route path="/cases/university-student-success" component={UniversityStudentSuccessIndustry} />
        <Route path="/cases/k12-adaptive-learning" component={K12AdaptiveLearningIndustry} />
        <Route path="/cases/community-college-adaptive-learning" component={K12AdaptiveLearningIndustry} />
        <Route path="/cases/university-online-programs" component={UniversityOnlineProgramsIndustry} />
        <Route path="/cases/city-digital-services" component={GovernmentDigitalServicesIndustry} />
        <Route path="/cases/government-benefits-modernization" component={GovernmentBenefitsAIIndustry} />
        <Route path="/cases/federal-automation" component={GovernmentBenefitsAIIndustry} />
        <Route path="/cases/smart-city-platform" component={SmartCityInfrastructureIndustry} />
        <Route path="/cases/supply-chain-visibility" component={DefenseSupplyChainIndustry} />
        <Route path="/cases/aerospace-digital-engineering" component={AerospaceDigitalEngineeringIndustry} />
        <Route path="/cases/logistics-optimization" component={AviationPredictiveMaintenanceIndustry} />
        <Route path="/cases/hotel-revenue-transformation" component={HotelRevenueManagementIndustry} />
        <Route path="/cases/pe-industrial-transformation" component={PEPortfolioOperationsIndustry} />
        <Route path="/cases/pe-healthcare-diligence" component={PEDueDiligenceIndustry} />
        <Route path="/cases/pe-distribution-digital" component={PECarveoutExecutionIndustry} />
        <Route path="/cases/insurance-claims-automation" component={InsuranceClaimsAutomationIndustry} />
        <Route path="/cases/insurance-ai-underwriting" component={InsuranceUnderwritingTransformationIndustry} />
        <Route path="/cases/insurance-digital-distribution" component={InsuranceCustomerExperienceIndustry} />
        <Route path="/cases/warehouse-optimization" component={WarehouseAutomationIndustry} />
        <Route path="/cases/automotive-ev-platform" component={AutomotiveSmartFactoryIndustry} />
        <Route path="/resources/whitepapers/:slug" component={WhitepaperDownload} />
        <Route path="/initiatives" component={Initiatives} />
        <Route path="/initiatives/mid-market-ai" component={MidMarketAIAccess} />
        <Route path="/initiatives/mid-market-ai-access" component={MidMarketAIAccess} />
        <Route path="/initiatives/intelligence-commons" component={IntelligenceCommons} />
        <Route path="/initiatives/regional-partnerships" component={RegionalPartnerships} />
        <Route path="/admin/leads" component={LeadsDashboard} />
        <Route path="/sitemap" component={Sitemap} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfUse} />
        <Route path="/cookies" component={CookiePreferences} />
        <Route path="/accessibility" component={Accessibility} />
        <Route path="/follow-us" component={FollowUs} />
        <Route path="/team" component={OurPeople} />
        <Route path="/team/:id" component={TeamMemberProfile} />
        <Route path="/our-people" component={OurPeople} />
        <Route path="/about" component={About} />
        <Route path="/about/values" component={PurposeMissionValues} />
        <Route path="/about/impact" component={OurImpact} />
        <Route path="/about/us-office" component={USOffice} />
        <Route path="/offices" component={Offices} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
  );
}

import { useAnalytics } from "@/hooks/useAnalytics";

function App() {
  useAnalytics();
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieConsent />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
