// composables/useOnlineStatus.ts
// This composable provides a reactive way to track online/offline status
// and alerts the user when their connection status changes.
import { onMounted, onBeforeUnmount, ref } from "vue";

export function useOnlineStatus(
  options: boolean | AddEventListenerOptions = false
) {
  const isOnline = ref(navigator.onLine); // Initialize with the current online status

  const handleOnline = () => {
    isOnline.value = true;
    alert("You are back online!"); // You can customize or remove this alert message
  };

  const handleOffline = () => {
    isOnline.value = false;
    alert("You are offline!"); // You can customize or remove this alert message
  };

  function registerListeners(
    action: typeof window.addEventListener | typeof window.removeEventListener
  ) {
    // Register or unregister the online/offline event listeners
    // based on the action passed (add or remove)
    action("online", handleOnline, options);
    action("offline", handleOffline, options);
  }

  onMounted(() => {
    registerListeners(window.addEventListener);
  });

  onBeforeUnmount(() => {
    registerListeners(window.removeEventListener);
  });

  return {
    isOnline,
  };
}
