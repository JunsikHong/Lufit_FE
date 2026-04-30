import NotificationList from "@/pages/common/notification/list/components/NotificationList";

const NotificationListPage = () => {

  return (
    <section className="absolute inset-0 z-50 bg-white flex flex-col overflow-y-auto px-4 space-y-2 py-4">
        <NotificationList />
    </section>
  );
}

export default NotificationListPage;