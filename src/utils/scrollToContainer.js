export const scrollToContainer = (element) => {
  const container = element?.current;

  if (container) {
    // Calculate the offset based on 7.7vw (viewport width units)
    const offset = (window.innerWidth / 100) * 5.10416666667;

    // Get the container's position relative to the document
    const containerPosition =
      container.getBoundingClientRect().top + window.pageYOffset;

    // Scroll to the container, adjusting for the offset
    window.scrollTo({
      top: containerPosition - offset,
      behavior: "smooth",
    });
  }
};
