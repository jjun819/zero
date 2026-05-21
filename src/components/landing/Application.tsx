import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const inputClass =
  "border-2 border-muted-foreground/30 bg-secondary focus-visible:border-primary focus-visible:bg-card";

const audienceOptions = [
  { value: "residents", label: "Only for Residents" },
  { value: "customers_employees", label: "Customers / Employees" },
  { value: "public", label: "Open to Public" },
] as const;

const propertyTypeOptions = [
  { value: "strata_corporations", label: "Strata Corporations" },
  { value: "multi_unit_residence", label: "Multi-Unit Residence" },
  { value: "commercial_building", label: "Commercial Building" },
] as const;

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  address: z
    .string()
    .trim()
    .min(3, "Enter the parking space address")
    .max(200),
  audience: z.enum(["residents", "customers_employees", "public"], {
    required_error: "Select one option",
  }),
  propertyType: z.enum(
    ["strata_corporations", "multi_unit_residence", "commercial_building"],
    {
      required_error: "Select a property type",
    },
  ),
  message: z.string().trim().max(1000, "Message must be 1,000 characters or less"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required" }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function Application() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      audience: undefined as unknown as FormValues["audience"],
      propertyType: undefined as unknown as FormValues["propertyType"],
      message: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (values: FormValues) => {
    const { consent: _consent, ...payload } = values;
    const res = await fetch("/api/public/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      form.setError("root", {
        message: "Something went wrong submitting your application. Please try again.",
      });
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="relative py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #2D865B 0%, #5BAA84 35%, #C9E2D5 70%, #FAFCFD 100%)",
      }}
    >
      <div className="mx-auto max-w-[1380px] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            Apply for the Zero Cost EV Charger Program
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Tell us about your property and we'll follow up with next steps —
            subject to site qualification and agreement approval.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-300 bg-card shadow-xl p-6 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-10">
              <div className="rounded-full bg-primary/10 p-4 mb-5">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-[#12141A] mb-3">
                Application received
              </h3>
              <p className="text-muted-foreground max-w-md">
                Thank you for applying. The UbiqPower team will review your
                information and contact you about the next steps.
              </p>
              <Button
                variant="ghost"
                className="mt-6"
                onClick={() => {
                  form.reset();
                  setSubmitted(false);
                }}
              >
                Submit another application
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-10"
                noValidate
              >
                <div className="grid gap-10 md:grid-cols-2">
                  {/* Contact Information */}
                  <div className="space-y-5">
                    <h3 className="text-xl font-semibold text-[#12141A]">
                      Contact Information
                    </h3>

                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input className={inputClass} placeholder="Jane" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input className={inputClass} placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              className={inputClass}
                              type="email"
                              placeholder="jane@company.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              className={inputClass}
                              type="tel"
                              placeholder="(604) 555-0199"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Parking Lot Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#12141A]">
                      Parking Lot Information
                    </h3>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Address of parking space
                          </FormLabel>
                          <FormControl>
                            <Input
                              className={inputClass}
                              type="text"
                              placeholder="123 Main St, Vancouver, BC"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="audience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Who will this be available to?</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {audienceOptions.map((opt) => {
                                const selected = field.value === opt.value;
                                return (
                                  <button
                                    type="button"
                                    key={opt.value}
                                    onClick={() => field.onChange(opt.value)}
                                    className={cn(
                                      "relative text-left rounded-lg border-2 px-3 py-3 text-sm transition-colors",
                                      selected
                                        ? "border-primary bg-primary/15 text-primary font-medium"
                                        : "border-muted-foreground/30 bg-secondary text-foreground hover:border-primary hover:bg-primary/5",
                                    )}
                                  >
                                    {selected && (
                                      <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                                    )}
                                    {opt.label}
                                  </button>
                                );
                              })}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Property</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                              {propertyTypeOptions.map((opt) => {
                                const selected = field.value === opt.value;
                                return (
                                  <button
                                    type="button"
                                    key={opt.value}
                                    onClick={() => field.onChange(opt.value)}
                                    className={cn(
                                      "relative min-h-16 text-left rounded-lg border-2 px-3 py-3 text-sm transition-colors",
                                      selected
                                        ? "border-primary bg-primary/15 text-primary font-medium"
                                        : "border-muted-foreground/30 bg-secondary text-foreground hover:border-primary hover:bg-primary/5",
                                    )}
                                  >
                                    {selected && (
                                      <Check className="absolute top-2 right-2 h-4 w-4 text-primary" />
                                    )}
                                    {opt.label}
                                  </button>
                                );
                              })}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional message</FormLabel>
                      <FormControl>
                        <Textarea
                          className={cn(inputClass, "min-h-32 resize-y")}
                          placeholder="Tell us anything else about your property, timeline, parking setup, or questions."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-lg border border-neutral-300 bg-secondary/40 p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-snug">
                        <FormLabel className="text-sm font-normal text-foreground">
                          I agree to be contacted by UbiqPower regarding this
                          application. Approval is subject to site qualification
                          and agreement.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex flex-col items-end gap-3">
                  {form.formState.errors.root && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.root.message}
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting
                      ? "Submitting..."
                      : "Submit Application"}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
