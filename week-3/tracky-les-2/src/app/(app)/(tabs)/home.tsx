import DefaultView from "@design/View/DefaultView";
import DateHeaderPicker from "@functional/Date/DateHeaderPicker";
import LogsOverview from "@functional/Logs/LogsOverview";
import { useState } from "react";

const HomeLayout = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DefaultView padding={false}>
      <DateHeaderPicker date={date} onDateChange={setDate} />
      <LogsOverview date={date} />
    </DefaultView>
  );
};

export default HomeLayout;
