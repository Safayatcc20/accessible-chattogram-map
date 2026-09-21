import { BadgeCheck, Clock3, RefreshCw } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { VerificationStatus } from "@/types/place";

const verificationConfig: Record<
  VerificationStatus,
  { label: string; className: string; icon: typeof BadgeCheck }
> = {
  "community-reviewed": {
    label: "Community reviewed demo data",
    className: "border-success bg-success-soft text-success-foreground",
    icon: BadgeCheck,
  },
  "recently-updated": {
    label: "Recently updated demo data",
    className: "border-info bg-info-soft text-info-foreground",
    icon: RefreshCw,
  },
  "needs-review": {
    label: "Needs community review",
    className: "border-warning bg-warning-soft text-warning-foreground",
    icon: Clock3,
  },
};

export function VerificationBadge({ status }: { status: VerificationStatus }) {
  const config = verificationConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant="outline" className={config.className}>
      <Icon className="mr-1 size-3.5" aria-hidden="true" />
      {config.label}
    </Badge>
  );
}
