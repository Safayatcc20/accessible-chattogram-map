import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { accessibilityFeatures, placeCategories } from "@/data/accessibility-features";

const contributionSchema = z.object({
  placeName: z.string().min(2, "Enter a place name"),
  category: z.string().min(1, "Choose a category"),
  address: z.string().min(5, "Enter an address"),
  location: z.string().min(2, "Add a location or nearby landmark"),
  wheelchairEntrance: z.boolean().default(false),
  ramp: z.boolean().default(false),
  elevator: z.boolean().default(false),
  accessibleToilet: z.boolean().default(false),
  accessibleParking: z.boolean().default(false),
  tactilePaving: z.boolean().default(false),
  additionalNotes: z.string().max(600, "Keep notes under 600 characters").optional(),
});

type ContributionFormValues = z.infer<typeof contributionSchema>;

const defaultValues: ContributionFormValues = {
  placeName: "",
  category: "",
  address: "",
  location: "",
  wheelchairEntrance: false,
  ramp: false,
  elevator: false,
  accessibleToilet: false,
  accessibleParking: false,
  tactilePaving: false,
  additionalNotes: "",
};

export function ContributePage() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContributionFormValues>({
    resolver: zodResolver(contributionSchema),
    defaultValues,
  });

  const onSubmit = () => {
    setSubmitted(true);
    form.reset(defaultValues);
  };

  return (
    <div className="bg-background">
      <section className="border-b bg-section-surface py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-primary">Contribute</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Help improve the accessibility map
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
            Share observed accessibility information for a Chattogram place. This MVP stores no data yet; submissions show a mock success message only.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="mb-6 rounded-lg border border-success bg-success-soft p-4 text-success-foreground" role="status">
            <div className="flex gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold">Mock report submitted</p>
                <p className="mt-1 text-sm">Thanks for helping improve the demo map. A future version will save this report for review.</p>
              </div>
            </div>
          </div>
        ) : null}

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="font-display text-2xl">Accessibility report form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="placeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Place name</FormLabel>
                        <FormControl>
                          <Input placeholder="Example: Chattogram Railway Station" {...field} className="min-h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="min-h-11">
                              <SelectValue placeholder="Choose category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {placeCategories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Street, area, Chattogram" {...field} className="min-h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Nearby landmark, gate, floor, or map note" {...field} className="min-h-11" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <fieldset className="space-y-4 rounded-lg border bg-section-surface p-4">
                  <legend className="px-1 text-sm font-semibold text-foreground">Observed accessibility features</legend>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {accessibilityFeatures
                      .filter((feature) => feature.key !== "audioAssistance")
                      .map((feature) => (
                        <FormField
                          key={feature.key}
                          control={form.control}
                          name={feature.key}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-md border bg-card p-3">
                              <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5 size-5" />
                              </FormControl>
                              <div>
                                <FormLabel className="cursor-pointer font-medium">{feature.shortLabel}</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      ))}
                  </div>
                </fieldset>

                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional notes</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Share details such as entrance location, step height, or staff assistance." {...field} className="min-h-32" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="rounded-lg border border-dashed bg-section-surface p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-3">
                      <Camera className="mt-1 size-5 text-primary" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-foreground">Optional photo</p>
                        <p className="text-sm text-muted-foreground">Photo upload is shown as an MVP placeholder and is not connected yet.</p>
                      </div>
                    </div>
                    <Button type="button" variant="outline" disabled>
                      Upload photo later
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <Button type="button" variant="outline" onClick={() => form.reset(defaultValues)}>
                    Clear form
                  </Button>
                  <Button type="submit">Submit mock report</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
