import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const schema = z.object({
  organization: z.string().trim().max(160, "Organization must be 160 characters or less"),
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  chargingStationLocation: z
    .string()
    .trim()
    .max(200, "Location must be 200 characters or less"),
  estimatedTraffic: z
    .string()
    .trim()
    .max(120, "Estimated traffic must be 120 characters or less"),
  expectedChargingHours: z
    .string()
    .trim()
    .max(120, "Expected charging hours must be 120 characters or less"),
  message: z.string().trim().max(1000, "Message must be 1,000 characters or less"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent is required to submit the application" }),
  }),
});

type FormValues = z.infer<typeof schema>;

export function Application() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      organization: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      chargingStationLocation: "",
      estimatedTraffic: "",
      expectedChargingHours: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    const res = await fetch("/api/public/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
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
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-[#12141A]">
                    Organization
                  </h3>

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name</FormLabel>
                        <FormControl>
                          <Input
                            className={inputClass}
                            placeholder="Company, strata, or property name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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
                  <div className="space-y-5">
                    <h3 className="text-xl font-semibold text-[#12141A]">
                      Parking Lot Information
                    </h3>

                    <FormField
                      control={form.control}
                      name="chargingStationLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location of EV charging station</FormLabel>
                          <FormControl>
                            <Input
                              className={inputClass}
                              type="text"
                              placeholder="Near visitor parking, parkade level P1, etc."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="estimatedTraffic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated number of traffic</FormLabel>
                          <FormControl>
                            <Input
                              className={inputClass}
                              type="text"
                              placeholder="Example: 50 vehicles per day"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="expectedChargingHours"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected charging hours per day</FormLabel>
                          <FormControl>
                            <Input
                              className={inputClass}
                              type="text"
                              placeholder="Example: 6-8 hours per day"
                              {...field}
                            />
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
                    <FormItem>
                      <div className="flex items-start gap-3 rounded-lg border border-muted-foreground/20 bg-secondary/60 p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(event) => field.onChange(event.target.checked)}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                            className="mt-1 h-4 w-4 cursor-pointer rounded border-muted-foreground/40 accent-primary"
                          />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="cursor-pointer text-sm font-medium leading-relaxed text-[#12141A]">
                            I consent to UbiqPower contacting me about this application.
                          </FormLabel>
                          <FormMessage />
                        </div>
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
