import dashboardPreview from "@/assets/dashboard-preview.png";

export function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-elegant bg-card">
      <img
        src={dashboardPreview}
        alt="GoFreyra Dashboard — live overblik over projektområde, biodiversitetsindeks, CO2-impact, ESG-dokumentationsstatus, AI-anbefalinger og audit trail"
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
  );
}
