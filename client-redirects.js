module.exports = {
  redirects: [
    //Static Re-directs
    {
      from: "/release-notes",
      to: "/release-notes/whats-new",
    },
    {
      from: "/docs",
      to: "/docs/category/documentation",
    },
    {
      from: "/tutorials/get-started",
      to: "/tutorials",
    },

    
    //===================================================================================
    // 
    //  H O W   T O   A D D   R E D I R E C T S
    //
    //  - Use the form in the example below. 
    //  - Create a redirect for each target page or folder on DevHub. 
    //  - Remove the forward-slash characters that comment out the lines of the example object.
    //  - Note the use of commas.
    //
    //  Created by User for PR-123 on Jan 14, 2023
    //  {
    //    from: "/docs/platform/delegates/delegate-guide/automate-delegate-installation",
    //    to: "/docs/platform/delegates/installation",
    //  },    
    //===================================================================================

    // Created by ravilach to fix CD Cert re-directs April 15th, 2023

    {
      from: "/docs/continuous-delivery/onboard-cd/cd-concepts/cd-pipeline-basics",
      to: "/docs/continuous-delivery/get-started/cd-pipeline-basics",
    },
    {
      from: "/docs/continuous-delivery/onboard-cd/cd-concepts/services-and-environments-overview",
      to: "/docs/continuous-delivery/get-started/services-and-environments-overview",
    },

     // Created by Charanya Jayaraman to fix CCM redirects on Apr 13, 2023

    {
      from: "/docs/cloud-cost-management/cloud-cost-technical-reference/ccm-ref/ccm-roles-and-permissions",
      to: "/docs/cloud-cost-management/getting-started-ccm/access-control/ccm-roles-and-permissions",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/quick-start-guides/kubernetes-autostopping-quick-start-guide",
      to: "/docs/cloud-cost-management/getting-started-ccm/quick-start-guides/kubernetes-autostopping-quick-start-guide",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-cost-anomaly-detection/detect-cloud-cost-anomalies-with-ccm",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/detect-cloud-cost-anomalies-with-ccm",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-currency-preferences/currency-preferences",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/currency-preferences",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-perspectives/export-perspective-data",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/ccm-perspectives/export-perspective-data",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-recommendations/node-pool-recommendations",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/ccm-recommendations/node-pool-recommendations",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-recommendations/workload-recommendations",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/ccm-recommendations/workload-recommendations",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/add-azure-connector",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/add-azure-connector",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/connect-to-an-aws-connector",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/connect-to-an-aws-connector",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/create-a-gcp-connector-for-auto-stopping-rules",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/create-a-gcp-connector-for-auto-stopping-rules",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-an-application-gateway-for-azure",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-an-application-gateway-for-azure",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-autoproxy-aws-lb",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-autoproxy-aws-lb",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-autoproxy-gcp-lb",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-autoproxy-gcp-lb",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-azure-autoproxy-lb",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-azure-autoproxy-lb",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-load-balancer-aws",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/load-balancer/create-load-balancer-aws",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/configure-ecg/configure-ecg-for-auto-stopping-rules",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/configure-ecg-for-auto-stopping-rules",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/autostopping-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/autostopping-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/k8s-connector-autostopping",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/add-connectors/k8s-connector-autostopping",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/autostopping-dry-run-mode",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/autostopping-dry-run-mode",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-ecs",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-ecs",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-azure",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-azure",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-gcp",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-gcp",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-rds",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-rds",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-terraform",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-auto-stopping-rules-for-terraform",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-autostopping-rules-aws",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-autostopping-rules-aws",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-autostopping-rules-for-kubernetes",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/create-autostopping-rules-for-kubernetes",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/kubernetes-autostopping-for-istio",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/kubernetes-autostopping-for-istio",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/review-autostopping-rules-reqs",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/optimize-cloud-costs-with-intelligent-cloud-auto-stopping-rules/create-auto-stopping-rules/review-autostopping-rules-reqs",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-perspectives/create-a-budget-perspective",
      to: "/docs/cloud-cost-management/use-ccm-cost-governance/ccm-budgets/create-a-budget",
    },
    {
      from: "/docs/cloud-cost-management/monitor-cloud-cost-with-integration/integration/datadog-integration",
      to: "/docs/cloud-cost-management/monitor-cloud-cost-with-integration/datadog-integration",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-perspectives/share-cost-perspective-report",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/ccm-perspectives/share-cost-perspective-report",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-cost-categories/use-ccm-cost-categories",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/ccm-cost-categories/ccm-cost-categories",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/root-cost-analysis/analyze-cost-for-aws",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/root-cost-analysis/analyze-cost-for-aws",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/root-cost-analysis/analyze-cost-for-azure",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/root-cost-analysis/analyze-cost-for-azure",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/root-cost-analysis/analyze-cost-for-gcp-using-perspectives",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/root-cost-analysis/analyze-cost-for-gcp-using-perspectives",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/root-cost-analysis/analyze-cost-for-k8s-ecs-using-perspectives",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/root-cost-analysis/analyze-cost-for-k8s-ecs-using-perspectives",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/root-cost-analysis/perform-root-cost-analysis",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/root-cost-analysis/perform-root-cost-analysis",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/root-cost-analysis/understanding-ccm-perspective-date-ranges",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/root-cost-analysis/understanding-ccm-perspective-date-ranges",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/quick-start-guides/autostopping-proxy-alb-usecase",
      to: "/docs/cloud-cost-management/getting-started-ccm/quick-start-guides/autostopping-proxy-alb-usecase",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/access-control/manage-access-control-for-ccm-dashboards",
      to: "/docs/cloud-cost-management/getting-started-ccm/access-control/manage-access-control-for-ccm-dashboards",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/access-control/manage-access-control-perspective-folders",
      to: "/docs/cloud-cost-management/getting-started-ccm/access-control/manage-access-control-perspective-folders",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/access-ccm-dashboards",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/access-ccm-dashboards",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/aws-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/aws-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/aws-reservation-coverage-and-service-cost",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/aws-reservation-coverage-and-service-cost",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/azure-cost-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/azure-cost-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/cluster-cost-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/cluster-cost-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/gcp-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/gcp-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/multi-cloud-cost-overview-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/multi-cloud-cost-overview-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/orphaned-ebs-volumes-and-snapshots-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/orphaned-ebs-volumes-and-snapshots-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/use-multiple-tags-in-aws",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/use-multiple-tags-in-aws",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/view-aws-ec-2-instance-metrics",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/view-aws-ec-2-instance-metrics",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/view-aws-ec-2-inventory-cost-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/view-aws-ec-2-inventory-cost-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-dashboards-and-access-control/ccm-dashboards-by-harness/view-aws-resource-breakdown-cost-dashboard",
      to: "/docs/cloud-cost-management/use-ccm-cost-reporting/use-ccm-dashboards/view-aws-resource-breakdown-cost-dashboard",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-recommendations/home-recommendations",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/ccm-recommendations/home-recommendations",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-recommendations/ec2-recommendations",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/ccm-recommendations/ec2-recommendations",
    },
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/ccm-recommendations/ecs-recommendations",
      to: "/docs/cloud-cost-management/use-ccm-cost-optimization/ccm-recommendations/ecs-recommendations",
    },
    
    // Created by SudheendraKatte for SRM Docs reorg, PR-1276, on Apr 12, 2023
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/service-reliability-management-basics",
      to: "/docs/service-reliability-management/getting-started/service-reliability-management-basics",
    }, 
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/slo-driven-deployment-governance",
      to: "/docs/service-reliability-management/slo-driven-deployment-governance",
    }, 
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/change-impact-analysis/change-impact-analysis-quickstart",
      to: "/docs/service-reliability-management/change-impact-analysis/",
    },
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/change-impact-analysis/change-impact-analysis-service-health-dashboard",
      to: "/docs/service-reliability-management/change-impact-analysis/change-impact-analysis-service-health-dashboard",
    }, 
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/change-impact-analysis/change-impact-analysis-changes-dash-board",
      to: "/docs/service-reliability-management/change-impact-analysis/change-impact-analysis-changes-dash-board",
    },
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/change-impact-analysis/change-impact-analysis-add-featureflag",
      to: "/docs/service-reliability-management/monitored-service/change-source/feature-flag-change-source",
    },
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/change-impact-analysis/change-impact-analysis-add-custom-change-source",
      to: "/docs/service-reliability-management/monitored-service/change-source/custom-deployment-change-source",
    },
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/slo-management-quickstart",
      to: "/docs/service-reliability-management/getting-started/create-first-slo",
    }, 
    {
      from: "/docs/service-reliability-management/howtos-service-reliability-management/composite-slo-quickstart",
      to: "/docs/service-reliability-management/slo/composite-slo",
    },  
    {
      from: "/docs/service-reliability-management/use-service-reliability-management/srm-notifications",
      to: "/docs/service-reliability-management/notifications/monitoredservice-notifications",
    }, 
    {
      from: "/docs/service-reliability-management/use-service-reliability-management/monitored-service-template/monitored-service-template-quickstart",
      to: "/docs/service-reliability-management/monitored-service/monitored-service-template-quickstart",
    },
    {
      from: "/docs/service-reliability-management/use-service-reliability-management/error-tracking-category/error-tracking-in-srm-overview",
      to: "/docs/service-reliability-management/continuous-error-tracking/error-tracking-in-srm-overview",
    }, 
    {
      from: "/docs/service-reliability-management/use-service-reliability-management/error-tracking-category/error-tracking-in-srm",
      to: "/docs/service-reliability-management/continuous-error-tracking/error-tracking-in-srm",
    }, 
    {
      from: "/docs/service-reliability-management/use-service-reliability-management/error-tracking-category/error-tracking-event-dashboard",
      to: "/docs/service-reliability-management/continuous-error-tracking/error-tracking-event-dashboard",
    },   
    {
      from: "/docs/service-reliability-management/use-service-reliability-management/error-tracking-category/error-tracking-arc",
      to: "/docs/service-reliability-management/continuous-error-tracking/error-tracking-arc",
    }, 
    
     // Created by ravilach for CI Tutorials Refactor, PR-1231, on Apr 5, 2023
     {
      from: "/tutorials/build-code/ci-tutorial-kubernetes-cluster-build-infra",
      to: "/tutorials/build-code/build/kubernetes-build-farm",
    },
    {
      from: "/tutorials/build-code/ci-node-docker-quickstart",
      to: "/tutorials/build-code/build/nodejs",
    },
    {
      from: "/tutorials/build-code/ci-localstack-background-step",
      to: "/tutorials/build-code/test/localstack",
    },
    {
      from: "/tutorials/build-code/ci-saucelabs-background-step",
      to: "/tutorials/build-code/test/saucelabs-proxy",
    },
    {
      from: "/tutorials/build-code/ci-java-http-server",
      to: "/tutorials/build-code/build/java",
    },
    {
      from: "/tutorials/build-code/ci-build-push-to-ecr",
      to: "/tutorials/build-code/publish/amazon-ecr",
    },
    {
      from: "/tutorials/build-code/ci-tutorial-go-containers",
      to: "/tutorials/build-code/build/go",
    },
    {
      from: "/tutorials/build-code/ci-tutorial-container-signing",
      to: "/tutorials/build-code/build/signed-image",
    },
    {
      from: "/tutorials/build-code/ci-react-quickstart",
      to: "/tutorials/build-code/build/react",
    },
    {
      from: "/tutorials/build-code/ci-tutorial-push-to-gar",
      to: "/tutorials/build-code/publish/google-gar",
    },
    {
      from: "/tutorials/build-code/ci-publish-allure-report",
      to: "/tutorials/build-code/test/allure-report",
    },
    {
      from: "/tutorials/build-code/ci-tutorial-rust-container",
      to: "/tutorials/build-code/build/rust",
    },
    {
      from: "/tutorials/build-code/ci-tutorial-codecov-test",
      to: "/tutorials/build-code/test/codecov",
    },
    
    // CD Tutorial

    // Created by schoudhury on Apr 3, 2023
    {
      from: "/tutorials/deploy-services/microservice-manifest-k8s",
      to: "/tutorials/deploy-services/kubernetes/manifest",
    },
    {
      from: "/tutorials/deploy-services/helm-k8s",
      to: "/tutorials/deploy-services/kubernetes/helm-chart",
    },
    {
      from: "/tutorials/deploy-services/helm-argocd-gitops-k8s",
      to: "/tutorials/deploy-services/kubernetes/helm-chart",
    },
    {
      from: "/tutorials/deploy-services/cdce-helm-k8s",
      to: "/tutorials/deploy-services/kubernetes/helm-chart",
    },
    {
      from: "/tutorials/deploy-services/docker-ecs",
      to: "/tutorials/deploy-services/amazon-ecs",
    },
    {
      from: "/tutorials/deploy-services/docker-ecr-k8s",
      to: "/tutorials/deploy-services/kubernetes",
    },
    {
      from: "/tutorials/deploy-services/harness-cicd-tutorial",
      to: "/tutorials/deploy-services/unified-cicd",
    },


    // Platform Tutorial

    // Created by schoudhury on Feb 21, 2023
       {
         from: "/tutorials/platform/provision-azure-infrastructure",
         to: "/tutorials/platform/install-delegate",
       },
    
    // Delegate Docs

    // Created by schoudhury on Mar 27, 2023 - Delegate concepts
      {
        from: "/docs/category/get-started-with-delegates",
        to: "/docs/category/delegate-concepts",
      },

      {
        from: "/docs/platform/Delegates/get-started-with-delegates/delegates-overview",
        to: "/docs/platform/Delegates/delegate-concepts/delegate-overview",
      },
    
      {
        from: "/docs/platform/Delegates/get-started-with-delegates/delegate-installation-overview",
        to: "/docs/platform/Delegates/delegate-concepts/delegate-overview",
      },
    
      {
        from: "/docs/platform/Delegates/delegate-guide/delegate-image-types",
        from: "/docs/platform/Delegates/get-started-with-delegates/delegate-image-types",
        to: "/docs/platform/Delegates/delegate-concepts/delegate-image-types",
      },

      {
        from: "/docs/platform/Delegates/get-started-with-delegates/delegate-registration",
        to: "/docs/platform/Delegates/delegate-concepts/delegate-registration",
      },
    
      {
        from: "/docs/platform/Delegates/get-started-with-delegates/delegate-requirements-and-limitations",
        to: "/docs/platform/Delegates/delegate-concepts/delegate-requirements",
      },
        
      {
        from: "/docs/platform/Delegates/get-started-with-delegates/graceful-delegate-shutdown-process",
        to: "/docs/platform/Delegates/delegate-concepts/graceful-delegate-shutdown-process",
      },

      {
        from: "/docs/platform/platform-concepts/delegate-overview",
        to: "/docs/platform/Delegates/delegate-concepts/delegate-overview",
      },

    // Created by schoudhury on Mar 27, 2023 - Install delegates
      {
        from: "/docs/platform/Delegates/install-delegates/install-a-delegate",
        to: "/docs/platform/Delegates/install-delegates/overview",
      },
    
      {
        from: "/docs/category/advanced-installation",
        to: "/docs/category/install-delegates",
      },

      {
        from: "/docs/platform/Delegates/advanced-installation/automate-delegate-installation",
        to: "/docs/platform/Delegates/install-delegates/automate-delegate-installation",
      },

      {
        from: "/docs/platform/Delegates/advanced-installation/docker-delegate-to-ecs-fargate",
        to: "/docs/platform/Delegates/install-delegates/docker-delegate-to-ecs-fargate",
      },
    
      {
        from: "/docs/platform/Delegates/advanced-installation/install-a-delegate-with-3-rd-party-tool-custom-binaries",
        to: "/docs/platform/Delegates/install-delegates/install-a-delegate-with-3-rd-party-tool-custom-binaries",
      },

      {
        from: "/docs/platform/Delegates/advanced-installation/install-a-kubernetes-delegate",
        to: "/docs/platform/Delegates/install-delegates/install-a-kubernetes-delegate",
      },

      {
        from: "/docs/platform/Delegates/customize-delegates/build-custom-delegate-images-with-third-party-tools",
        to: "/docs/platform/Delegates/install-delegates/build-custom-delegate-images-with-third-party-tools",
      },

      {
        from: "/docs/platform/Delegates/customize-delegates/enable-root-user-privileges-to-add-custom-binaries",
        to: "/docs/platform/Delegates/install-delegates/enable-root-user-privileges-to-add-custom-binaries",
      },
    
    // Created by schoudhury on Mar 27, 2023 - Manage delegates
      {
        from: "/docs/category/configure-delegates",
        to: "/docs/category/manage-delegates",
      },

      {
        from: "/docs/platform/Delegates/configure-delegates/configure-delegate-proxy-settings",
        to: "/docs/platform/Delegates/manage-delegates/configure-delegate-proxy-settings",
      },

      {
        from: "/docs/platform/Delegates/configure-delegates/delegate-auto-update",
        to: "/docs/platform/Delegates/install-delegates/delegate-upgrades-and-expiration",
      },


    // Created by kat-enos for PR-2421 on Jan 13, 2023; modified Jan 22, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/build-custom-delegate-images-with-third-party-tools",
         to: "/docs/platform/Delegates/install-delegates/build-custom-delegate-images-with-third-party-tools",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023; modified Jan 22, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-auto-update",
         to: "/docs/platform/Delegates/install-delegates/delegate-upgrades-and-expiration",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023; modified on Jan 21, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-how-tos",
         to: "/docs/platform/Delegates/delegate-concepts/delegate-overview",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-reference/delegate-requirements-and-limitations",
         to: "/docs/platform/Delegates/delegate-concepts/delegate-requirements",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023; modified on Jan 22, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/enable-root-user-privileges-to-add-custom-binaries",
         to: "/docs/platform/Delegates/install-delegates/enable-root-user-privileges-to-add-custom-binaries",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023; modified on Jan 22, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/install-delegates-with-third-party-tools",
         to: "/docs/platform/Delegates/install-delegates/build-custom-delegate-images-with-third-party-tools",
       },
    
    
    
    // Created by kat-enos for PR-738 on Feb 21, 2023
       {
          from: "/docs/platform/Delegates/install-delegates/kubernetes-delegates/install-harness-delegate-on-kubernetes",
          to: "/docs/platform/Delegates/install-delegates/overview",
        },
    

    // Created by kat-enos for PR-738 on Feb 21, 2023
    {
      from: "/docs/platform/Delegates/install-delegates/kubernetes-delegates/install-harness-delegate-using-helm",
      to: "/docs/platform/Delegates/install-delegates/overview",
    },
    
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/automate-delegate-installation",
         to: "/docs/platform/Delegates/install-delegates/automate-delegate-installation",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/install-delegate-with-3-rd-party-tool-custom-binaries",
         to: "/docs/platform/Delegates/install-delegates/install-a-delegate-with-3-rd-party-tool-custom-binaries",
       },
    
    // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/non-root-delegate-installation",
         to: "/docs/platform/Delegates/delegate-concepts/delegate-overview",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/custom-delegate",
         to: "/docs/platform/Delegates/install-delegates/build-custom-delegate-images-with-third-party-tools",
       },   
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/configure-delegate-proxy-settings",
         to: "/docs/platform/Delegates/manage-delegates/configure-delegate-proxy-settings",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/run-scripts-on-delegates",
         to: "/docs/platform/Delegates/install-delegates/build-custom-delegate-images-with-third-party-tools",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023; modified Jan 22, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delegate-registration",
         to: "/docs/platform/Delegates/delegate-concepts/delegate-registration",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/delete-a-delegate",
         to: "/docs/platform/Delegates/manage-delegates/delete-a-delegate",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/select-delegates-with-selectors",
         to: "/docs/platform/Delegates/manage-delegates/select-delegates-with-selectors",
       },  
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/secure-delegates-with-tokens",
         to: "/docs/platform/Delegates/secure-delegates/secure-delegates-with-tokens",
       },
    
     // Created by kat-enos for PR-2421 on Jan 13, 2023
       {
         from: "/docs/platform/Delegates/delegate-guide/trust-store-override-for-delegates",
         to: "/docs/platform/Delegates/secure-delegates/trust-store-override-for-delegates",
       },  

    // Created by kat-enos on Jan 22, 2023
       {
         from: "/docs/platform/Delegates/delegate-reference/example-kubernetes-manifest-harness-delegate",
         to: "/docs/platform/Delegates/delegate-reference/YAML/example-kubernetes-manifest-harness-delegate",
       },  

    // Created by kat-enos on Jan 22, 2023
       {
        from: "/docs/platform/Delegates/delegate-reference/example-harness-delegate-yaml",
        to: "/docs/platform/Delegates/delegate-reference/YAML/example-harness-delegate-yaml",
       },


    // Created by kat-enos on Jan 22, 2023
    {
      from: "/docs/platform/Delegates/delegate-reference/sample-create-a-permanent-volume-nfs-server",
      to: "/docs/platform/Delegates/delegate-reference/YAML/sample-create-a-permanent-volume-nfs-server",
    },

     // Created by KimberlyFields on March 29, 2023
    {
      from: "/docs/platform/Delegates/manage-delegates/delegate-auto-update",
      to: "/docs/platform/Delegates/install-delegates/delegate-upgrades-and-expiration",
    },

    //  Created by aimurphy for PR-783 on Feb 23, 2023
    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/set-up-an-aws-vm-build-infrastructure",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/vm-build-infrastructure/set-up-an-aws-vm-build-infrastructure",
    },

    //  Created by aimurphy for PR-783 on Feb 23, 2023
    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/define-a-ci-build-infrastructure-in-azure",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/vm-build-infrastructure/define-a-ci-build-infrastructure-in-azure",
    },

    //  Created by aimurphy for PR-783 on Feb 23, 2023
    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/define-a-ci-build-infrastructure-in-google-cloud-platform",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/vm-build-infrastructure/define-a-ci-build-infrastructure-in-google-cloud-platform",
    },

    //  Created by aimurphy for PR-783 on Feb 23, 2023
    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/define-macos-build-infra-with-anka-registry",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/vm-build-infrastructure/define-macos-build-infra-with-anka-registry",
    },

    //  Created by aimurphy for CI-6241 on Mar 22, 2023
    {
      from: "/docs/category/onboard-with-ci",
      to: "/docs/category/get-started-with-ci",
    },

    //  Created by aimurphy for CI-6241 on Mar 24, 2023
    {
      from: "/docs/category/migrating-to-harness-ci",
      to: "/docs/category/migrate-to-harness-ci",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 3, 2023
    {
      from: "/docs/category/test-intelligence",
      to: "/docs/category/run-tests",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 3, 2023
    {
      from: "/docs/category/run-ci-scripts",
      to: "/docs/category/run-scripts",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 3, 2023
    {
      from: "/docs/category/view-your-build",
      to: "/docs/category/view-builds",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 4, 2023
    {
      from: "/docs/continuous-integration/ci-technical-reference/built-in-cie-codebase-variables-reference",
      to: "/docs/continuous-integration/use-ci/codebase-configuration/built-in-cie-codebase-variables-reference",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 4, 2023
    {
      from: "/docs/continuous-integration/use-ci/run-ci-scripts/clone-and-process-multiple-codebases-in-the-same-pipeline",
      to: "/docs/continuous-integration/use-ci/codebase-configuration/clone-and-process-multiple-codebases-in-the-same-pipeline",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 6, 2023
    {
      from: "/docs/category/troubleshoot-and-optimize-ci",
      to: "/docs/category/troubleshoot-ci",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 6, 2023
    {
      from: "/docs/continuous-integration/troubleshoot/optimizing-ci-build-times",
      to: "/docs/continuous-integration/use-ci/optimize-and-more/optimizing-ci-build-times",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 6, 2023
    {
      from: "/docs/continuous-integration/ci-technical-reference/group-ci-steps-using-step-groups",
      to: "/docs/continuous-integration/use-ci/optimize-and-more/group-ci-steps-using-step-groups",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 6, 2023
    {
      from: "/docs/continuous-integration/use-ci/view-your-builds/viewing-tests",
      to: "/docs/continuous-integration/use-ci/set-up-test-intelligence/viewing-tests",
    },

    //  Created by dbothwell for DOC-2895 on Apr 5, 2023
    {
    from: "/docs/security-testing-orchestration/onboard-sto/tutorial-1-standalone-workflows",
    to: "/tutorials/orchestrate-security-tests/sto-standalone-workflows",
    },

    //  Created by dbothwell for DOC-2895 on Apr 5, 2023
    {
    from: "/docs/security-testing-orchestration/onboard-sto/sto-tutorial-2-integrated-sto-ci-cd-workflows",
    to: "/tutorials/orchestrate-security-tests/sto-integrated-workflows",
    },
    
    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 10, 2023
    {
      from: "/docs/continuous-integration/ci-technical-reference/ci-build-image-updates",
      from: "/docs/continuous-integration/use-ci/build-stage-settings/ci-build-image-updates",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/ci-build-image-updates",
    },

    //  Created by aimurphy for branch ci-reorg-pt-2 on Apr 10, 2023
    {
      from: "/docs/continuous-integration/ci-technical-reference/harness-ci",
      from: "/docs/continuous-integration/use-ci/build-stage-settings/harness-ci",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/harness-ci",
    },

    // Created by michael cretzman to fix CCM redirects on Apr 12, 2023
    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-splunk",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-splunk",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployment-with-prometheus",
      to: "/docs/continuous-delivery/verify/verify-deployment-with-prometheus",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-app-dynamics",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-app-dynamics",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-cloudwatch",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-cloudwatch",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-custom-health-metrics",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-custom-health-metrics",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-datadog",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-datadog",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-dynatrace",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-dynatrace",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-elastic-search",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-elastic-search",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-google-cloud-operations",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-google-cloud-operations",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-new-relic",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-new-relic",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-splunk",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-splunk",
    },

    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-sumologic",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-sumologic",
    },

    {
      from: "/docs/cloud-cost-management/onboard-with-cloud-cost-management/cloud-cost-management-overview/continuous-efficiency-overview",
      to: "/docs/cloud-cost-management/getting-started-ccm/continuous-efficiency-overview",
    },
    
    {
      from: "/docs/cloud-cost-management/onboard-with-cloud-cost-management/cloud-cost-management-overview/harness-key-cloud-cost-concepts",
      to: "/docs/cloud-cost-management/getting-started-ccm/harness-key-cloud-cost-concepts",
    },
    
    {
      from: "/docs/cloud-cost-management/use-cloud-cost-management/cloud-integration/use-cloud-integration",
      to: "/docs/cloud-cost-management/getting-started-ccm/set-up-cloud-cost-management/use-cloud-integration",
    },
    
    {
      from: "/docs/cloud-cost-management/onboard-with-cloud-cost-management/set-up-cloud-cost-management/set-up-cost-visibility-for-aws",
      to: "/docs/cloud-cost-management/getting-started-ccm/set-up-cloud-cost-management/set-up-cost-visibility-for-aws",
    },
    
    {
      from: "/docs/cloud-cost-management/onboard-with-cloud-cost-management/set-up-cloud-cost-management/set-up-cost-visibility-for-azure",
      to: "/docs/cloud-cost-management/getting-started-ccm/set-up-cloud-cost-management/set-up-cost-visibility-for-azure",
    },
    
    {
      from: "/docs/cloud-cost-management/onboard-with-cloud-cost-management/set-up-cloud-cost-management/set-up-cost-visibility-for-gcp",
      to: "/docs/cloud-cost-management/getting-started-ccm/set-up-cloud-cost-management/set-up-cost-visibility-for-gcp",
    },
    
 // Created by doug bothwell to redirect topics in STO Workflows on Apr 13, 2023

    {
      from: "/docs/security-testing-orchestration/use-sto/sto-workflows-overview",
      to: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/sto-workflows-overview",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/run-an-orchestrated-scan-in-sto",
      to: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/run-an-orchestrated-scan-in-sto",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/ingest-scan-results-into-an-sto-pipeline",
      to: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingest-scan-results-into-an-sto-pipeline",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/ingesting-issues-from-other-scanners",
      to: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/ingesting-issues-from-other-scanners",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/snyk-scans",
      to: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/snyk-scans",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/java-scans",
      to: "/docs/security-testing-orchestration/use-sto/orchestrate-and-ingest/java-scans",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/add-artifacts-to-pipelines",
      to: "/docs/security-testing-orchestration/use-sto/set-up-sto-pipelines/add-artifacts-to-pipelines",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/download-images-from-private-registry",
      to: "/docs/security-testing-orchestration/use-sto/set-up-sto-pipelines/download-images-from-private-registry",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/security-testing-dashboard",
      to: "/docs/security-testing-orchestration/use-sto/view-and-troubleshoot-vulnerabilities/security-testing-dashboard",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/sto-overview",
      to: "/docs/security-testing-orchestration/use-sto/view-and-troubleshoot-vulnerabilities/sto-overview",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/jira-integrations",
      to: "/docs/security-testing-orchestration/use-sto/view-and-troubleshoot-vulnerabilities/jira-integrations",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/email-notifications",
      to: "/docs/security-testing-orchestration/use-sto/view-and-troubleshoot-vulnerabilities/email-notifications",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/exemption-workflows",
      to: "/docs/security-testing-orchestration/use-sto/stop-builds-based-on-scan-results/exemption-workflows",
    },
    
    {
      from: "/docs/security-testing-orchestration/use-sto/stop-pipelines-using-opa",
      to: "/docs/security-testing-orchestration/use-sto/stop-builds-based-on-scan-results/stop-pipelines-using-opa",
    },

    // Created by michael cretzman for DOC-2694 on Apr 11, 2023
    {
      from: "/docs/continuous-delivery/cd-execution/cv-category/verify-deployments-with-the-verify-step",
      to: "/docs/continuous-delivery/verify/verify-deployments-with-the-verify-step",
    },

    {
      from: "/docs/continuous-delivery/cd-deployments-category/control-resource-usage-with-queue-steps",
      to: "/docs/continuous-delivery/x-platform-cd-features/cd-steps/flow-control/control-resource-usage-with-queue-steps",
    },

    {
      from: "/docs/continuous-delivery/cd-deployments-category/synchronize-deployments-using-barriers",
      to: "/docs/continuous-delivery/x-platform-cd-features/cd-steps/flow-control/synchronize-deployments-using-barriers",
    },

    {
      from: "/docs/continuous-delivery/onboard-cd/cd-quickstarts/ecs-deployment-tutorial",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/aws/ecs/ecs-deployment-tutorial",
    },

    {
      from: "/docs/continuous-delivery/onboard-cd/cd-quickstarts/azure-web-apps-tutorial",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/azure/azure-web-apps-tutorial",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/ticketing-systems-category/servicenow-import-set",
      to: "/docs/continuous-delivery/x-platform-cd-features/cd-steps/ticketing-systems/servicenow-import-set",
    },

    {
      from: "/docs/continuous-delivery/cd-technical-reference/cd-gen-ref-category/email_step",
      to: "/docs/continuous-delivery/x-platform-cd-features/cd-steps/utilities/email_step",
    },

    {
      from: "/docs/continuous-delivery/cd-technical-reference/cd-k8s-ref/kubernetes-rollback",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-k8s-ref/kubernetes-rollback",
    },

    {
      from: "/docs/continuous-delivery/cd-technical-reference/cd-k8s-ref/kubernetes-delegate-step",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/delete-kubernetes-resources",
    },

    {
      from: "/docs/continuous-delivery/cd-technical-reference/cd-gen-ref-category/http-step",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/using-http-requests-in-cd-pipelines",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/terraform-category/run-a-terraform-plan-with-the-terraform-plan-step",
      to: "/docs/continuous-delivery/cd-infrastructure/terraform-infra/run-a-terraform-plan-with-the-terraform-plan-step",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/terraform-category/run-a-terraform-plan-with-the-terraform-apply-step",
      to: "/docs/continuous-delivery/cd-infrastructure/terraform-infra/run-a-terraform-plan-with-the-terraform-apply-step",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/terraform-category/rollback-provisioned-infra-with-the-terraform-rollback-step",
      to: "/docs/continuous-delivery/cd-infrastructure/terraform-infra/rollback-provisioned-infra-with-the-terraform-rollback-step",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/terraform-category/remove-provisioned-infra-with-terraform-destroy",
      to: "/docs/continuous-delivery/cd-infrastructure/terraform-infra/remove-provisioned-infra-with-terraform-destroy",
    },

    {
      from: "/docs/continuous-delivery/cd-infrastructure/kubernetes-infra/define-your-kubernetes-target-infrastructure",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-infra/define-your-kubernetes-target-infrastructure",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/cd-helm-category/deploy-helm-chart-with-dependencies-and-subcharts",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/helm/cd-helm-category/deploy-helm-chart-with-dependencies-and-subcharts",
    },

    {
      from: "/docs/continuous-delivery/cd-advanced/cd-helm-category/use-a-local-helm-chart",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/helm/cd-helm-category/use-a-local-helm-chart",
    },

    {  
      from: "/docs/continuous-delivery/cd-technical-reference/cd-k8s-ref/kubernetes-releases-and-versioning",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-k8s-ref/kubernetes-releases-and-versioning",
    },

    {  
      from: "/docs/continuous-delivery/cd-technical-reference/cd-k8s-ref/kubernetes-steps-timeouts-and-deadline-parameters",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-k8s-ref/kubernetes-steps-timeouts-and-deadline-parameters",
    },
    
    {
      from: "/docs/continuous-delivery/cd-technical-reference/cd-k8s-ref/using-open-shift-with-harness-kubernetes",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-k8s-ref/using-open-shift-with-harness-kubernetes",
    },
    
    {
      from: "/docs/continuous-delivery/cd-advanced/cd-kubernetes-category/add-a-custom-remote-script-and-manifests",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-kubernetes-category/add-a-custom-remote-script-and-manifests",
    },
    
    {
      from: "/docs/continuous-delivery/cd-advanced/cd-kubernetes-category/add-and-override-values-yaml-files",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-kubernetes-category/add-and-override-values-yaml-files",
    },
    
    {
      from: "/docs/continuous-delivery/cd-advanced/cd-kubernetes-category/add-artifacts-for-kubernetes-deployments",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-kubernetes-category/add-artifacts-for-kubernetes-deployments",
    },
    
    {
      from: "/docs/continuous-delivery/cd-advanced/cd-kubernetes-category/define-kubernetes-manifests",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-kubernetes-category/define-kubernetes-manifests",
    },
    
    {
      from: "/docs/continuous-delivery/cd-advanced/cd-kubernetes-category/pull-an-image-from-a-private-registry-for-kubernetes",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-kubernetes-category/pull-an-image-from-a-private-registry-for-kubernetes",
    },
    
    {
      from: "/docs/continuous-delivery/cd-advanced/cd-kubernetes-category/skip-harness-label-selector-tracking-on-kubernetes-deployments",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/cd-kubernetes-category/skip-harness-label-selector-tracking-on-kubernetes-deployments",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/create-a-kubernetes-blue-green-deployment",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/create-a-kubernetes-blue-green-deployment",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/create-a-kubernetes-canary-deployment",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/create-a-kubernetes-canary-deployment",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/create-a-kubernetes-rolling-deployment",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/create-a-kubernetes-rolling-deployment",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/delete-kubernetes-resources",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/delete-kubernetes-resources",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/deploy-manifests-using-apply-step",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/deploy-manifests-using-apply-step",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/k8s-dry-run",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/k8s-dry-run",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/run-kubernetes-jobs",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/run-kubernetes-jobs",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/kubernetes-executions/scale-kubernetes-replicas",
      to: "/docs/continuous-delivery/deploy-srv-diff-platforms/kubernetes/kubernetes-executions/scale-kubernetes-replicas",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/container-step",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/container-step",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/download-and-copy-artifacts-using-the-command-step",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/download-and-copy-artifacts-using-the-command-step",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/run-a-script-on-multiple-target-instances",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/run-a-script-on-multiple-target-instances",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/run-jenkins-jobs-in-cd-pipelines",
      to: "/docs/continuous-delivery/x-platform-cd-features/advanced/builds/run-jenkins-jobs-in-cd-pipelines",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/using-http-requests-in-cd-pipelines",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/using-http-requests-in-cd-pipelines",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/using-shell-scripts",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/using-shell-scripts",
    },
    
    {
      from: "/docs/continuous-delivery/cd-execution/cd-general-steps/wait-step",
      to: "/docs/continuous-delivery/x-platform-cd-features/executions/cd-general-steps/wait-step",
    },
    
    {
      from: "/docs/continuous-delivery/cd-deployments-category/deployment-logs-and-limitations",
      to: "/docs/continuous-delivery/manage-deployments/deployment-logs-and-limitations",
    },
    
    {
      from: "/docs/continuous-delivery/onboard-cd/upgrading/upgrade-nextgen-cd",
      to: "/docs/continuous-delivery/get-started/upgrading/upgrade-nextgen-cd",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/add-a-harness-git-ops-repository",
      to: "/docs/continuous-delivery/gitops/add-a-harness-git-ops-repository",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/add-harness-git-ops-repository-credentials-template",
      to: "/docs/continuous-delivery/gitops/add-harness-git-ops-repository-credentials-template",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/harness-cd-git-ops-quickstart",
      to: "/docs/continuous-delivery/gitops/harness-cd-git-ops-quickstart",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/harness-git-ops-application-set-tutorial",
      to: "/docs/continuous-delivery/gitops/harness-git-ops-application-set-tutorial",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/harness-git-ops-basics",
      to: "/docs/continuous-delivery/gitops/harness-git-ops-basics",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/install-a-harness-git-ops-agent",
      to: "/docs/continuous-delivery/gitops/install-a-harness-git-ops-agent",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/multiple-argo-to-single-harness",
      to: "/docs/continuous-delivery/gitops/multiple-argo-to-single-harness",
    },
    
    {
      from: "/docs/continuous-delivery/cd-gitops/gitops-allowlist",
      to: "/docs/continuous-delivery/gitops/gitops-allowlist",
    },

    // Created by SmritiSatya for branch redirects-for-ce on April 18,2023
    {
      from: "/docs/chaos-engineering/chaos-faults/common-tunables-for-all-faults",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/common-tunables-for-all-faults",
    },
    {
      from: "/docs/chaos-engineering/overview/Security/security-templates/kyverno-policies",
      to: "/docs/chaos-engineering/technical-reference/security/security-templates/kyverno-policies",
    },
    {
      from: "/docs/chaos-engineering/overview/Security/security-templates/psp",
      to: "/docs/chaos-engineering/technical-reference/security/security-templates/psp",
    },
    {
      from: "/docs/chaos-engineering/overview/Security/security-templates/openshift-scc",
      to: "/docs/chaos-engineering/technical-reference/security/security-templates/openshift-scc",
    },
    {
      from: "/docs/chaos-engineering/overview/Security/introduction",
      to: "/docs/chaos-engineering/technical-reference/security/introduction",
    },
    {
      from: "/docs/chaos-engineering/overview/Security/namespace-considerations",
      to: "/docs/chaos-engineering/technical-reference/security/namespace-considerations",
    },
    {
      from: "/docs/chaos-engineering/overview/glossary",
      to: "/docs/chaos-engineering/get-started/terminologies",
    },
    {
      from: "/docs/chaos-engineering/overview/introduction-to-chaos-module",
      to: "/docs/chaos-engineering/get-started/introduction-to-chaos-module",
    },
    {
      from: "/docs/chaos-engineering/overview/powered-by-litmus",
      to: "/docs/chaos-engineering/get-started/powered-by-litmus",
    },
    {
      from: "/docs/chaos-engineering/technical-reference/probes/configure-and-add-probe",
      to: "/docs/chaos-engineering/configure-chaos-experiments/probes/configure-and-add-probe",
    },
    {
      from: "/docs/chaos-engineering/user-guides/validate-hypothesis-using-probes",
      to: "/docs/chaos-engineering/configure-chaos-experiments/probes/validate-hypothesis-using-probes",
    },
    {
      from: "/docs/chaos-engineering/user-guides/add-a-new-user-to-a-project",
      to: "/docs/chaos-engineering/configure-chaos-experiments/prerequisites/add-a-new-user-to-a-project",
    },
    {
      from: "/docs/chaos-engineering/user-guides/add-chaos-hub",
      to: "/docs/chaos-engineering/configure-chaos-experiments/chaos-hubs/add-chaos-hub",
    },
    {
      from: "/docs/chaos-engineering/user-guides/connect-chaos-infrastructures",
      to: "/docs/chaos-engineering/configure-chaos-experiments/chaos-infrastructure/connect-chaos-infrastructures",
    },
    {
      from: "/docs/chaos-engineering/user-guides/disconnect-chaos-infrastructure",
      to: "/docs/chaos-engineering/configure-chaos-experiments/chaos-infrastructure/disconnect-chaos-infrastructure",
    },
    {
      from: "/docs/chaos-engineering/user-guides/construct-and-run-custom-chaos-experiments",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/construct-and-run-custom-chaos-experiments",
    },
    {
      from: "/docs/chaos-engineering/user-guides/manage-chaos-experiment-execution/analyze-chaos-experiment",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/construct-and-run-custom-chaos-experiments",
    },
    {
      from: "/docs/chaos-engineering/user-guides/manage-chaos-experiment-execution/create-complex-chaos-experiments",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/create-complex-chaos-experiments",
    },
    {
      from: "/docs/chaos-engineering/user-guides/manage-chaos-experiment-execution/delete-chaos-experiments",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/delete-chaos-experiments",
    },
    {
      from: "/docs/chaos-engineering/user-guides/manage-chaos-experiment-execution/edit-chaos-experiment",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/edit-chaos-experiment",
    },
    {
      from: "/docs/chaos-engineering/user-guides/manage-chaos-experiment-execution/export-chaos-experiments",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/export-chaos-experiments",
    },
    {
      from: "/docs/chaos-engineering/user-guides/manage-chaos-experiment-execution/halt-chaos-experiments",
      to: "/docs/chaos-engineering/configure-chaos-experiments/experiments/halt-chaos-experiments",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/chaos-faults",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/gcp/gcp-vm-disk-loss-by-label",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/gcp/gcp-vm-disk-loss-by-label",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/gcp/gcp-vm-disk-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/gcp/gcp-vm-disk-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/gcp/gcp-vm-instance-stop-by-label",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/gcp/gcp-vm-instance-stop-by-label",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/gcp/gcp-vm-instance-stop",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/gcp/gcp-vm-instance-stop",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-disk-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-disk-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-instance-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-instance-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-instance-io-stress",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-instance-io-stress",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-instance-memory-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-instance-memory-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-instance-stop",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-instance-stop",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-web-app-access-restrict",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-web-app-access-restrict",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/azure/azure-web-app-stop",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/azure/azure-web-app-stop",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kube-resilience/kubelet-density",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kube-resilience/kubelet-density",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/load/locust-loadgen",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/load/locust-loadgen",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/vmware-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/vmware-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-disk-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-disk-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-DNS-chaos",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-DNS-chaos",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-host-reboot",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-host-reboot",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-http-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-http-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-http-modify-response",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-http-modify-response",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-http-reset-peer",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-http-reset-peer",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-io-stress",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-io-stress",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-memory-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-memory-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-network-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-network-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-network-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-network-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-process-kill",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-process-kill",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-service-stop",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-service-stop",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/VMware-vm-power-off",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/VMware-vm-power-off",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/vmware/vmware-windows-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/vmware/vmware-windows-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/common-tunables-for-node-faults",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/common-tunables-for-node-faults",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/docker-service-kill",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/docker-service-kill",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/kubelet-service-kill",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/kubelet-service-kill",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/node-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/node-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/node-drain",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/node-drain",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/node-io-stress",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/node-io-stress",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/node-memory-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/node-memory-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/node-restart",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/node-restart",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/node/node-taint",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/node/node-taint",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/common-tunables-for-pod-faults",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/common-tunables-for-pod-faults",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/container-kill",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/container-kill",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/disk-fill",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/disk-fill",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-autoscaler",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-autoscaler",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-cpu-hog-exec",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-cpu-hog-exec",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-delete",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-delete",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-dns-error",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-dns-error",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-dns-spoof",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-dns-spoof",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-http-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-http-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-http-modify-body",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-http-modify-body",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-http-modify-header",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-http-modify-header",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-http-reset-peer",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-http-reset-peer",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-http-status-code",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-http-status-code",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-io-stress",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-io-stress",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-memory-hog-exec",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-memory-hog-exec",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-memory-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-memory-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-network-corruption",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-network-corruption",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-network-duplication",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-network-duplication",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-network-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-network-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-network-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-network-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/kubernetes/pod/pod-network-partition",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/kubernetes/pod/pod-network-partition",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/alb-az-down",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/alb-az-down",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/clb-az-down",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/clb-az-down",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ebs-loss-by-id",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ebs-loss-by-id",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ebs-loss-by-tag",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ebs-loss-by-tag",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-dns-chaos",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-dns-chaos",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-http-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-http-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-http-modify-body",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-http-modify-body",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-http-modify-header",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-http-modify-header",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-http-reset-peer",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-http-reset-peer",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-http-status-code",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-http-status-code",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-io-stress",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-io-stress",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-memory-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-memory-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-network-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-network-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/eec2-network-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-network-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-process-kill",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-process-kill",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-stop-by-id",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-stop-by-id",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ec2-stop-by-tag",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ec2-stop-by-tag",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-agent-stop",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-agent-stop",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-container-cpu-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-container-cpu-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-container-io-stress",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-container-io-stress",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-container-memory-hog",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-container-memory-hog",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-container-network-loss",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-container-network-loss",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-instance-stop",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-instance-stop",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/ecs-container-network-latency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/ecs-container-network-latency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/lambda-delete-event-source-mapping",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/lambda-delete-event-source-mapping",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/lambda-delete-function-concurrency",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/lambda-delete-function-concurrency",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/lambda-toggle-event-mapping-state",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/lambda-toggle-event-mapping-state",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/lambda-update-function-memory",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/lambda-update-function-memory",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/lambda-update-function-timeout",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/lambda-update-function-timeout",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/lambda-update-role-permission",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/lambda-update-role-permission",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/rds-instance-delete",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/rds-instance-delete",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/rds-instance-reboot",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/rds-instance-reboot",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/aws-fault-tunables",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/aws-fault-tunables",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/security/aws-switch-profile",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/security-configurations/aws-switch-profile",
    },
    {
      from: "/docs/chaos-engineering/chaos-faults/aws/security/policy-for-all-aws-faults",
      to: "/docs/chaos-engineering/technical-reference/chaos-faults/aws/security-configurations/policy-for-all-aws-faults",
    },
    
    //  Created by aimurphy for branch ci-reorg-pt-3 on Apr 12, 2023
    {
      from: "/docs/category/codebase-configuration",
      to: "/docs/category/configure-codebases",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/ci-cluster-requirement",
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/ci-cluster-requirement",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/k8s-build-infrastructure/ci-cluster-requirement",
    },

    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/run-windows-builds-in-a-kubernetes-build-infrastructure",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/k8s-build-infrastructure/run-windows-builds-in-a-kubernetes-build-infrastructure",
    },

    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/configure-a-kubernetes-build-farm-to-use-self-signed-certificates",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/k8s-build-infrastructure/configure-a-kubernetes-build-farm-to-use-self-signed-certificates",
    },

    {
      from: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/set-up-a-kubernetes-cluster-build-infrastructure",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/k8s-build-infrastructure/set-up-a-kubernetes-cluster-build-infrastructure",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/ci-stage-settings",
      from: "/docs/continuous-integration/use-ci/build-stage-settings/ci-stage-settings",
      to: "/docs/continuous-integration/use-ci/set-up-build-infrastructure/ci-stage-settings",
    },

    {
      from: "/docs/continuous-integration/use-ci/build-and-upload-artifacts/modify-and-override-build-settings-before-a-build",
      from: "/docs/continuous-integration/use-ci/build-stage-settings/modify-and-override-build-settings-before-a-build",
      to: "/docs/continuous-integration/use-ci/run-ci-scripts/modify-and-override-build-settings-before-a-build",
    },

    {
      from: "/docs/category/build-stage-settings",
      to: "/docs/category/set-up-build-infrastructure",
    },

    // Created by aimurphy for branch ci-reorg-pt-3 on Apr 13, 2023
    {
      from: "/docs/category/ci-technical-reference",
      to: "/docs/category/reference-ci-steps-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/build-and-push-to-docker-hub-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/build-and-push-steps/build-and-push-to-docker-hub-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/build-and-push-to-acr-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/build-and-push-steps/build-and-push-to-acr-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/build-and-push-to-ecr-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/build-and-push-steps/build-and-push-to-ecr-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/build-and-push-to-gcr-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/build-and-push-steps/build-and-push-to-gcr-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/upload-artifacts-to-gcs-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/upload-artifacts-steps/upload-artifacts-to-gcs-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/upload-artifacts-to-jfrog-artifactory-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/upload-artifacts-steps/upload-artifacts-to-jfrog-artifactory-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/upload-artifacts-to-s-3-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/upload-artifacts-steps/upload-artifacts-to-s-3-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/ci-bitrise-plugin",
      to: "/docs/continuous-integration/ci-technical-reference/plugin-steps/ci-bitrise-plugin",
    },

    {
      from: "/tutorials/build-code/ci-github-action-step",
      from: "/docs/continuous-integration/ci-technical-reference/ci-github-action-step",
      to: "/docs/continuous-integration/ci-technical-reference/plugin-steps/ci-github-action-step",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/plugin-step-settings-reference",
      to: "/docs/continuous-integration/ci-technical-reference/plugin-steps/plugin-step-settings-reference",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/restore-cache-from-gcs-settings",
      to: "/docs/continuous-integration/ci-technical-reference/cache-steps/restore-cache-from-gcs-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/save-cache-to-gcs-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/cache-steps/save-cache-to-gcs-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/restore-cache-from-s-3-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/cache-steps/restore-cache-from-s-3-step-settings",
    },

    {
      from: "/docs/continuous-integration/ci-technical-reference/save-cache-to-s-3-step-settings",
      to: "/docs/continuous-integration/ci-technical-reference/cache-steps/save-cache-to-s-3-step-settings",
    },

    // adding redirect for Rashmi
    {
      from: "/docs/platform/References/whitelist-harness-domains-and-ips",
      to: "/docs/platform/References/allowlist-harness-domains-and-ips",
    },
  ],
};
