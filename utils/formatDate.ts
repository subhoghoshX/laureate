export default function formatDate(dateString: string): string[] {
  const d = new Date(dateString);

  let hour = d.getHours();
  let minute = d.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;

  const time = `${hour}:${("0" + minute).slice(-2)}`;

  let day = d.getDate();
  let month = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let year = d.getFullYear();

  const date = `${day} ${month}, ${year}`;

  return [time, date];
}
