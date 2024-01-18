import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchIcon } from "@/components/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  setUserName: Dispatch<SetStateAction<string>>;
};

type InputsType = {
  userName: string;
};

export function SearchForm({ setUserName }: Props) {
  const form = useForm({
    defaultValues: {
      userName: "octocat",
    },
  });
  const onSubmit: SubmitHandler<InputsType> = (data) => {
    setUserName(data.userName.trim());
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 rounded-xl border p-4 py-6 shadow-sm transition-colors xs:flex-row xs:items-center"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem className="relative flex-1 space-y-0">
              <FormLabel>
                <SearchIcon className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-primary" />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter username"
                  className="h-11 rounded-lg bg-transparent pl-14"
                  required
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="rounded-lg">
          Search
        </Button>
      </form>
    </Form>
  );
}
