const container = document.createElement("div");
      container.classList.add("container");

      const tabBox = document.createElement("div");
      tabBox.classList.add("tab_box");
      container.appendChild(tabBox);

      const buttons = ["Home", "About", "Blogs", "Contact us"];

      buttons.forEach((buttonText, index) => {
        const button = document.createElement("button");
        button.classList.add("tab_btn");
        if (index === 0) {
          button.classList.add("active");
        }
        button.textContent = buttonText;
        tabBox.appendChild(button);

        button.addEventListener("click", () => {
          const activeButton = document.querySelector(".tab_btn.active");
          activeButton.classList.remove("active");

          button.classList.add("active");

          const buttonIndex = Array.from(tabBox.children).indexOf(button);

          const contentItems = document.querySelectorAll(".content");
          contentItems.forEach((item, itemIndex) => {
            if (itemIndex === buttonIndex) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        });
      });

      const line = document.createElement("div");
      line.classList.add("line");
      tabBox.appendChild(line);

      const contentBox = document.createElement("div");
      contentBox.classList.add("content_box");
      container.appendChild(contentBox);

      const contents = [
        {
          title: "Home",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod laboriosam possimus maiores quos vero, harum cumque, commodi natus eveniet dignissimos velit, expedita unde magnam architecto delectus tenetur facilis? Quasi.",
        },
        {
          title: "About",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod laboriosam possimus maiores quos vero, harum cumque, commodi natus eveniet dignissimos velit, expedita unde magnam architecto delectus tenetur facilis? Quasi.",
        },
        {
          title: "Blogs",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod laboriosam possimus maiores quos vero, harum cumque, commodi natus eveniet dignissimos velit, expedita unde magnam architecto delectus tenetur facilis? Quasi.",
        },
        {
          title: "Contact us",
          text:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quod laboriosam possimus maiores quos vero, harum cumque, commodi natus eveniet dignissimos velit, expedita unde magnam architecto delectus tenetur facilis? Quasi.",
        },
      ];

      contents.forEach((content, index) => {
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        if (index === 0) {
          contentDiv.classList.add("active");
        }

        const title = document.createElement("h2");
        title.textContent = content.title;
        contentDiv.appendChild(title);

        const paragraph = document.createElement("p");
        paragraph.textContent = content.text;
        contentDiv.appendChild(paragraph);

        contentBox.appendChild(contentDiv);
      });

      document.body.appendChild(container);

      
