import React from "react";

interface ContentServiceProps {
  descriptionHtml?: string;
}

function ContentService({ descriptionHtml }: ContentServiceProps) {
  return (
    <div className="lg:col-span-9">
      <div
        className="text-black"
        dangerouslySetInnerHTML={{ __html: descriptionHtml || "" }}
      />
    </div>
  );
}

export default ContentService;
