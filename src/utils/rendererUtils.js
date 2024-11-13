// import jsonToHtml from "json-to-html";
// import DOMPurify from "dompurify";
// import json2md from "json2md";
import marked from "marked";

export const renderAsHTML = (data) => {
  try {
    const renderedData = data.map((item, index) => (
      <div key={index}>
        {Object.entries(item).map(([key, value]) => (
          <p key={`${index}-${key}`}>
            <b>{key}:</b> {value}
          </p>
        ))}
      </div>
    ));
    return renderedData;
  } catch (error) {
    console.error("Error rendering JSON as HTML:", error);
    return <p>Error rendering as HTML</p>;
  }
};

export const renderAsMarkdown = (data) => {
  try {
    const markdownContent = data
      .map((item) => {
        let content = `## Item ${item.id}\n`;

        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            content += `**${key.toUpperCase()}:** ${item[key]}  \n`;
          }
        }

        return content;
      })
      .join("\n\n");

    return markdownContent;
  } catch (error) {
    console.error("Error rendering JSON as Markdown:", error);
    return "Error rendering as Markdown";
  }
};
