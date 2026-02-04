import React from "react";
import { z } from "zod";
import Container from "../commonComponent/containers/Container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  FaMoneyBillWave,
  FaCcPaypal,
  FaAmazonPay,
  FaCreditCard,
} from "react-icons/fa";
import { SiVenmo } from "react-icons/si";

/* ================= ZOD SCHEMA ================= */

const billingSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    address: z.string().min(1, "Address is required"),
    country: z.string().min(1, "Country is required"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    zip: z.string().min(1, "Zip code is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(6, "Phone number is too short"),

    payment: z.enum(["cod", "venmo", "paypal", "amazon", "card"]),

    cardName: z.string().optional(),
    cardNumber: z.string().optional(),
    expiry: z.string().optional(),
    cvc: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.payment === "card") {
      if (!data.cardName)
        ctx.addIssue({
          path: ["cardName"],
          message: "Card name is required",
        });

      if (!data.cardNumber)
        ctx.addIssue({
          path: ["cardNumber"],
          message: "Card number is required",
        });

      if (!data.expiry)
        ctx.addIssue({
          path: ["expiry"],
          message: "Expiry date is required",
        });

      if (!data.cvc)
        ctx.addIssue({
          path: ["cvc"],
          message: "CVC is required",
        });
    }
  });

/* ================= COMPONENT ================= */

const CheckoutContainer = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(billingSchema),
    defaultValues: { payment: "card" },
  });

  const payment = watch("payment");

  const onSubmit = (data) => {
    console.log("FORM DATA ", data);
  };

  const Error = ({ msg }) =>
    msg ? <p className="text-red-500 text-sm mt-1">{msg}</p> : null;

  return (
    <section className="py-[72px]">
      <Container>
        <div className="grid grid-cols-3 gap-x-6">
          {/* LEFT */}
          <div className="col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="bilingForm">
              {/* Billing Info */}
              <section className=" rounded-lg p-6 space-y-4">
                <h5 className="text-lg font-medium">Billing Information</h5>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      {...register("firstName")}
                      placeholder="First name"
                    />
                    <Error msg={errors.firstName?.message} />
                  </div>

                  <div>
                    <input {...register("lastName")} placeholder="Last name" />
                    <Error msg={errors.lastName?.message} />
                  </div>
                </div>

                <div>
                  <input
                    {...register("address")}
                    placeholder="Address"
                    className="w-full"
                  />
                  <Error msg={errors.address?.message} />
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <select {...register("country")}>
                      <option value="">Country</option>
                      <option value="BD">Bangladesh</option>
                    </select>
                    <Error msg={errors.country?.message} />
                  </div>

                  <div>
                    <select {...register("state")}>
                      <option value="">State</option>
                      <option value="dhaka">Dhaka</option>
                    </select>
                    <Error msg={errors.state?.message} />
                  </div>

                  <div>
                    <select {...register("city")}>
                      <option value="">City</option>
                      <option value="dhaka">Dhaka</option>
                    </select>
                    <Error msg={errors.city?.message} />
                  </div>

                  <div>
                    <input {...register("zip")} placeholder="Zip Code" />
                    <Error msg={errors.zip?.message} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input {...register("email")} placeholder="Email" />
                    <Error msg={errors.email?.message} />
                  </div>

                  <div>
                    <input {...register("phone")} placeholder="Phone" />
                    <Error msg={errors.phone?.message} />
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className=" rounded-lg p-6 space-y-4">
                <h5 className="text-lg font-medium">Payment Option</h5>

                <div className="grid grid-cols-5 gap-4 text-center">
                  {[
                    ["cod", "Cash", <FaMoneyBillWave />],
                    ["venmo", "Venmo", <SiVenmo />],
                    ["paypal", "Paypal", <FaCcPaypal />],
                    ["amazon", "Amazon", <FaAmazonPay />],
                    ["card", "Card", <FaCreditCard />],
                  ].map(([value, label, icon]) => (
                    <label
                      key={value}
                      className="cursor-pointer flex  flex-col items-center space-y-2"
                    >
                      <div className="mx-auto text-[45px] text-primary_500">
                        {icon}
                      </div>
                      <div>
                        <input
                          type="radio"
                          value={value}
                          {...register("payment")}
                        />
                        <p>{label}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Card Fields */}
                {payment === "card" && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <input
                        {...register("cardName")}
                        placeholder="Name on card"
                      />
                      <Error msg={errors.cardName?.message} />
                    </div>

                    <div>
                      <input
                        {...register("cardNumber")}
                        placeholder="Card number"
                      />
                      <Error msg={errors.cardNumber?.message} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input {...register("expiry")} placeholder="MM/YY" />
                        <Error msg={errors.expiry?.message} />
                      </div>

                      <div>
                        <input {...register("cvc")} placeholder="CVC" />
                        <Error msg={errors.cvc?.message} />
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </form>
          </div>

          {/* RIGHT */}
          <div className=" rounded-lg p-6">
            Order Summary
            <button className="bg-primary_500 text-white px-6 py-3 rounded" form="bilingForm" type="submit">
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutContainer;
