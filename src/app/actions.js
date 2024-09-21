"use server";

export async function updateUser(productId, formData) {
  console.log(productId);

  const rawFormData = {
    eamil: formData.get("email"),
  };

  console.log(rawFormData);
}
