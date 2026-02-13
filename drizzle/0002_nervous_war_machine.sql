CREATE TABLE `caseStudyAnalytics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`caseStudyTitle` varchar(500) NOT NULL,
	`caseStudyIndustry` varchar(200),
	`downloadCount` int NOT NULL DEFAULT 0,
	`uniqueLeads` int NOT NULL DEFAULT 0,
	`avgLeadScore` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `caseStudyAnalytics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `notificationSettings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`notificationEmail` varchar(320),
	`instantNotifications` int DEFAULT 1,
	`dailyDigest` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `notificationSettings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `leads` ADD `leadScore` int DEFAULT 0;--> statement-breakpoint
ALTER TABLE `leads` ADD `notificationSent` int DEFAULT 0;