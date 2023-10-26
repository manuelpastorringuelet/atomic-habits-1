import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import useStore from "@/hooks/useStore";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  processGoal: z.string().min(2, {
    message: "Process Goal must be at least 2 characters.",
  }),
});

const WelcomeForm = () => {
  const { username, processGoal, setUsername, setProgressGoal } = useStore();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username,
      processGoal: processGoal,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setUsername(values.username);
    setProgressGoal(values.processGoal);
    toast.success("Welcome to Atomic Habits!");
  }

  const { formState } = form;

  const { isSubmitSuccessful } = formState;

  if (!isSubmitSuccessful) {
    return (
      <div className="space-y-10">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Welcome to Atomic Habits
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {`Let's get better 1% every day!`}
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 text-left"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>My name is:</FormLabel>
                  <FormControl>
                    <Input placeholder="Cool Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="processGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>My process goal is:</FormLabel>
                  <FormControl>
                    <Input placeholder="Exercise every day" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    );
  } else {
    return null;
  }
};

export default WelcomeForm;
