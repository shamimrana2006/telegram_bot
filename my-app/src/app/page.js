import Nave from "./component/Nave";

// app/dashboard/page.js
async function getData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 3-second delay
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <div className=" rounded-3xl absolute bottom-0 left-0 shadow-custom-light pb-36 bg-gray-900 p-5 w-full text-white text-wrap border-t-2 border-blue-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam dolorum
        officia iusto minus beatae nam corporis magni maiores eius vitae
        accusantium totam neque dolore nesciunt eos ipsa sint doloribus, o
        nostrum delectus alias neque tempora voluptas corrupti quisquam in.
        Nulla molestias modi ducimus tempora dolor totam quia aliquam ratione
        eaque beatae vero dolor vel officiis aliquam natus? Neque nobis quia
        minus enim, non voluptatum nam dicta veniam quae, assumenda expedita
        deleniti. Inventore aspernatur atque ipsam. Perferendis mollitia odio
        nihil ut pariatur non eveniet nostrum, explicabo voluptas ad quis quos
        id alias, officia natus veritatis excepturi. Ea quisquam sequi quas
        aliquam voluptate expedita tenetur?
      </div>
    </>
  );
}
