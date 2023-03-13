import React from "react";
import { FormGroup, listingSchema } from "../../components/FormGroup";
import { t } from "../../providers/providers";

export const CreateListing = () => {
  const hook = t.listingCreate.useMutation();
  return (
    <FormGroup
      formDefaultValue={{}}
      formKeys={[
        "address",
        "attributes",
        "category",
        "city",
        "description",
        "displayTitle",
        "email",
        "name",
        "phone",
        "subTitle",
        "website",
        "zipcode",
        "image1",
        "image2",
        "image3",
        "image4",
      ]}
      formValidator={listingSchema}
      onSubmit={() => {}}
    />
  );
};
