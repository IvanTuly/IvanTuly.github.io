import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      className="pageinfo"
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAhFBMVEUzMzP///8wMDAnJycrKyvz8/MjIyMdHR0VFRUqKiogICBVVVWWlpb7+/s/Pz+jo6Pe3t7Ly8utra3t7e02NjZnZ2d1dXVPT0/T09O4uLipqamCgoLm5uZHR0daWlrDw8MAAACbm5txcXGOjo4SEhJ6enrQ0NBDQ0OGhoa8vLxhYWGQkJDijAW8AAAG7ElEQVR4nO2Za3uiOhSFIYlJiIKgUkVRR+ul7fz//3dy5eLUkTNtz8yZZ70fWiDJ3lkh7OzEKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADEUJDfndvfg6+L4oikv59yqUo1hzZp9pkxg+0+BHcAKfPlPgIjP8KQo/XyCfGYsX8XkWP8RXCSwg8D/i7xN4E+G6Au8Hv38TFocIvDH3rvVfCcWEc7a4XiPGeWjbCCSUE11E+e3LNJWzbUaoYl1DnNOof29s6srf1lbgN/0gubHj2jD995olwZy+WGy1354apqh2ujD/hstjYrdeWT1pPh377CUIpNk0N1d1tVNdm0SUlS3QJWXoE9lVmvWiqXSdmQdbws5VNXN2zJOXjkJ2NFUOCRG7qtYVRkWpzGN6LkwX5tWW9pzWtqOrScaH6hO7VdyhchPACzy9pE3JvjOYfNxttNo5b+zJ3I0WoR5Z2uIxoeuui/hVte7pweqWi31TfBCR2tXhLj0GhXzZcZoehiWSt761r4g0AstZr6TpuXi5afQiWoHzjsDUC5z2alddgRPzJN+mnfLNqWffJwdq0/dZJEMUJkV8y0U2Am8Ka+ZdTX5odFAfEjgf9fw8vVNdfb/1mQ+JyNS9o8vkfNxUfhSPLAi0Zqqp/9rieGZNJuU7RcfkXwjsfD+0Gax8Nn31PTD/ivXUj+9IdpwW5924PNSd7vwcQubaIRU0YYmS7jvYq1bgJZOKKjn2OrbENHFl+VIqruTWfRipnjB3BUZUyhBFpZSdONsInJcnrrsRxqsggnPp2huvJLGXo7FMCGH0dLAF5YB1mp7TMnyuRNjOzkkj8LsvYnzVzBbfpRV11plwAz3lPxEY3V0HvbWc2MjKXFiKfQTx38IbibidA+k1xF9pFRYqegzbtkGbnq0ZPWJO4FSGEpK5ESShKG2WW0LtgxEjvy6waXOam9vXUzDgXxRh1sdzO7dPdpYuh8QZotdqvXvneo6Rse37Mqg4tlNArb0vdrQXk9YXdTHvnPy6wCZeuDk09cbJ1QVzlmzc1Gr1UPtkQqOHEHGd7PO8mJ0JdzOkFdjJRcnO6aI+YFxbXySzldf8AwLDXPMCac9yyXhl/u+/qQaRvWvuR1jyGnvSNb8vMHITseLKRqK8O3TChoaV+DqBzkNedbARdySjB5DtPG6py/SuQFm7DjpfvY2r18yTLxNI6/h9Hr5BHuJynRtb6f03KL0wJ3TfE1i5l/p1Atk9gY/WCR+kR89Ucb6dumXnZ29wr1wXVt2OuoUiV183Re++wUdR1PV6lNk8mqhrfVegX95nXNlvtu5ueZSfvV/4DdrHl+34lgf6yMIOw0sI+cn4rkD2Zqs+U5f+25wmWHGZ8pR+YRS1jWvFyA2PBLrYf2171BfYWQeFC7Y74tbKbh7osgzzpbjtUnM06JV/gsDk7F08EHRHYHZP4OwUajIna8TCtI63wRlZWBm1TtVcDvAWSoTb4LwvMBFMsqECfSaTd1eF/sHAHYFuipahKtv2BcZrYTddhC7cajLTk9llFXp3SF0Rc4H4hYZpvD9ZRUz6XV1XYH0yn7O53czT+sgHCoy4S6SqU3gXiag2A9IY9zZq4cY84fsbgXF9JEJJsvG39vPyKf9oQ6SS7Oyk19L0x9VaL6QSahd2k06gz4A2J7E124uQ3g0U6BPe+LKUNEmoosc8ThePPsF2Z7A86eRHHN3k6wrUMeOyX4VkYGr7wfwuJp6v2qIxa8ZLa1+9Fm1gdwL9i4+LItV7Eh/3czpQYMTCJrSYbM7f3dHMZcC5TFhg8tfXIpwatAKruMfKG6RlfMuT7RJ97j8tOkHG7wys/hMhfoiGTlEzp39wavZRj+inaqNjP1Ure2cj7SEI3XVb6XZvXrrqHWCts47ASDVJrw5Dfpqv+GCBkSp75xpmjzzgI4zYoj142WdulI1A27WzLBsl6aFzqpYsusdRVRaiFInaw7H8KMOpmisjIS2Mz23c96dqjUBbZ90ITFuBUZJ1nY4OZEAYNUbErpqn6ShfLwXJJga9bCTP5mJJmHjaj3TpakJ6E54o8lzoZum8mJDOiSkRb6+1flxXb4KR7LuxEpZZIp5Xpmhmjjr5sU7zNxqRN1NlE1YWtjG3zQ+vC9uNkFQYp3vjdLSalWL42S9RkhIhzQsi1GBaJuGC6UhJxI/mCBW6GZW3Jbo+J1y6k/DGnIMKYYr8KqJs8LYu23fB+i2S/q3em0u9HOnt+af+NHuf3/Jz5p/yGyoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+R/wDyBxukmGo0m8AAAAASUVORK5CYII=" />
      <div className="pageinfo__title">About me</div>
    </motion.div>
  );
};

export default AboutMe;
