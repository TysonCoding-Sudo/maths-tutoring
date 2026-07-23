export interface PriceConfig {
  baseRates: {
    online: { oneOnOne: number; group: number };
    inPerson: { oneOnOne: number; group: number };
  };
  discounts: {
    weekly: number;
    package10: number;
    package20: number;
  };
  trialPrice: number;
}

export const pricingConfig: PriceConfig = {
  baseRates: {
    online: { oneOnOne: 350, group: 200 },
    inPerson: { oneOnOne: 450, group: 250 },
  },
  discounts: {
    weekly: 0.05,
    package10: 0.1,
    package20: 0.15,
  },
  trialPrice: 0,
};

export function calculatePrice(
  mode: "online" | "inPerson",
  type: "oneOnOne" | "group",
  sessions: number,
  frequency: "weekly" | "biweekly" | "monthly"
): number {
  const baseRate = pricingConfig.baseRates[mode][type];
  let total = baseRate * sessions;
  let discount = 0;

  if (frequency === "weekly") {
    discount = pricingConfig.discounts.weekly;
  }

  if (sessions >= 20) {
    discount = Math.max(discount, pricingConfig.discounts.package20);
  } else if (sessions >= 10) {
    discount = Math.max(discount, pricingConfig.discounts.package10);
  }

  total = total * (1 - discount);
  return Math.round(total);
}
