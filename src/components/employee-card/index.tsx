import { IEmployeeModel } from "../../interfaces-types/Employee-model";

interface IProps {
  employee: IEmployeeModel;
}

const EmployeeCard = ({ employee }: IProps) => {
  const { imagePortraitUrl, name, office, twitter, stackOverflow, linkedIn } = employee;

  return (
    <div
      className="w-full max-w-md my-4 mx-auto bg-white rounded-md shadow-xl overflow-hidden"
      data-cy="employee-card"
    >
      <div className="max-w-md mx-auto">
        <div
          className="h-[500px] bg-cover	bg-top"
          style={{
            backgroundImage: `url(${imagePortraitUrl ? imagePortraitUrl : "/no-avatar.jpeg"})`,
          }}
        ></div>
        <div className="p-4 sm:p-6">
          <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1" data-cy="employee-name">
            {name}
          </p>
          <div className="flex flex-row">
            <p className="text-[17px] font-bold">Office: {office}</p>
          </div>
          <span className="flex">
            {twitter && (
              <a
                className="mr-1 hover:text-slate-400"
                href={`https://www.twitter.com/${twitter}`}
                data-cy="twitter-link"
              >
                <small>Twitter</small>
              </a>
            )}
            {stackOverflow && (
              <a
                className="mr-1 hover:text-slate-400"
                href={`https://www.stackoverflow.com/users/${stackOverflow}`}
              >
                <small>Stackoverflow</small>
              </a>
            )}
            {linkedIn && (
              <a
                className="mr-1 hover:text-slate-400"
                href={`https://www.linkedin.com/${linkedIn}`}
              >
                <small>Linkedin</small>
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
