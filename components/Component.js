import dynamic from "next/dynamic";

export const Component = ({ someValue }) => {
  const Another = dynamic(() => import(`${someValue}`));
  console.log(someValue, Another);
  return (
    <div>
      <h2>This is a component that has bug</h2>
      <Another />
    </div>
  );
};
