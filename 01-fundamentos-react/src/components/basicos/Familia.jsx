import { Children, cloneElement } from "react";

export default function Familia({ children, surname }) {
  return (
    <div>
      {Children.map(children, child =>
        cloneElement(child, {
          surname: child.props.surname ?? surname
        })
      )}
    </div>
  );
}
