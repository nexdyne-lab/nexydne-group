CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`firstName` varchar(100),
	`lastName` varchar(100),
	`company` varchar(200),
	`jobTitle` varchar(200),
	`caseStudyTitle` varchar(500),
	`caseStudyIndustry` varchar(200),
	`source` varchar(100) DEFAULT 'pdf_download',
	`marketingConsent` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leads_id` PRIMARY KEY(`id`)
);
