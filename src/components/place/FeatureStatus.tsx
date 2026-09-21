import { CheckCircle2, CircleHelp, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { featureStatusLabels } from "@/data/accessibility-features";
import type { AccessibilityStatus } from "@/types/place";

const statusTone: Record<AccessibilityStatus, string> = {
  available: "border-success bg-success-soft text-success-foreground",
  unavailable: "border-destructive/30 bg-destructive-soft text-destructive",
  unknown: "border-warning bg-warning-soft text-warning-foreground",
};

const icons = {
  available: CheckCircle2,
  unavailable: XCircle,
  unknown: CircleHelp,
};

export function FeatureStatus({ status }: { status: AccessibilityStatus }) {
  const Icon = icons[status];
  return (
    <Badge variant="outline" className={statusTone[status]}>
      <Icon className="mr-1 size-3.5" aria-hidden="true" />
      {status === "available" ? "✓" : status === "unavailable" ? "✕" : "?"} {featureStatusLabels[status]}
    </Badge>
  );
}
