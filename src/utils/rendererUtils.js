import jsonToHtml from "json-to-html";
import json2md from "json2md";
import DOMPurify from "dompurify";

export const renderAsHTML = (data) => {
  try {
    const html = jsonToHtml(data);

    const sanitizedHtml = DOMPurify.sanitize(html);
    return sanitizedHtml;
  } catch (error) {
    console.error("Error rendering JSON as HTML:", error);
    return "<p>Error rendering as HTML</p>";
  }
};

export const renderAsMarkdown = (data) => {
  try {
    return json2md(data);
  } catch (error) {
    console.error("Error rendering JSON as Markdown:", error);
    return "Error rendering as Markdown";
  }
};
