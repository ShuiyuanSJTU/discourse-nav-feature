import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.11.1", (api) => {
  const tag = settings.nav_tag;
  if (tag != "") {
    api.addNavigationBarItem({
      name: tag,
      displayName: tag,
      href: `/tag/${tag}`,
      customFilter: (category, args, router) => {
        return args.tagId != tag;
      },
      forceActive: (category, args, router) => {
        return args.tagId == tag;
      },
      before: "unread",
    });
  }
});
