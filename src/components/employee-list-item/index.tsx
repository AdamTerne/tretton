import { IEmployeeModel } from "../../interfaces-types/Employee-model";

interface IProps {
  employee: IEmployeeModel;
}

const EmployeeListItem = ({ employee }: IProps) => {
  const { imagePortraitUrl, name, office, twitter, stackOverflow, linkedIn } = employee;
  return (
    <li className="bg-white border-b p-4 flex items-start">
      <div className="flex-shrink-0 w-14 h-14 mr-7 self-center">
        <img
          className="w-full h-full rounded-full object-contain border"
          src={imagePortraitUrl ? imagePortraitUrl : "/no-avatar.jpeg"}
          alt="Profile pic"
        />
      </div>
      <span className="flex flex-col w-1/4 mr-2">
        <span>Name</span>
        <span className="font-semibold">{name}</span>
      </span>
      <span className="flex flex-col w-1/2">
        <span>Office</span>
        <span className="font-semibold">{office}</span>
      </span>
      <span className="flex flex-col w-1/4 ml-auto items-end">
        {twitter && (
          <a className="mr-1" href={`https://www.twitter.com/${twitter}`} data-cy="twitter-link">
            <small className="font-semibold">🗣️</small>
          </a>
        )}
        {stackOverflow && (
          <a className="mr-1" href={`https://www.stackoverflow.com/users/${stackOverflow}`}>
            <small className="font-semibold">👾</small>
          </a>
        )}
        {linkedIn && (
          <a className="mr-1" href={`https://www.linkedin.com/${linkedIn}`}>
            <small className="font-semibold">👔</small>
          </a>
        )}
      </span>
    </li>
  );
};

export default EmployeeListItem;
