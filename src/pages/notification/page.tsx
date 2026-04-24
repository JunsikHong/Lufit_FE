import NotificationList from "@/pages/notification/components/NotificationList";

const NotificationPage = () => {

  return (
    <section className="absolute inset-0 z-50 bg-white flex flex-col overflow-y-auto px-4 space-y-2">
      <NotificationList />
    </section>
  );
}

export default NotificationPage;