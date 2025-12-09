import DateHeader from "@design/Header/DateHeader";
import { addDays, format, subDays } from "date-fns";

type Props = {
  date: Date;
  onDateChange: (date: Date) => void;
};

const formatDate = (date: Date) => {
  if (format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")) {
    return "Today";
  } else if (format(date, "yyyy") === format(new Date(), "yyyy")) {
    return format(date, "dd/MM");
  } else {
    return format(date, "dd/MM/yyyy");
  }
};

const DateHeaderPicker = ({ date, onDateChange }: Props) => {
  const handleNextDayPress = () => {
    onDateChange(addDays(date, 1));
  };

  const handlePrevDayPress = () => {
    onDateChange(subDays(date, 1));
  };

  return (
    <DateHeader date={formatDate(date)} onPrevPress={handlePrevDayPress} onNextPress={handleNextDayPress} />
  );
};

export default DateHeaderPicker;
