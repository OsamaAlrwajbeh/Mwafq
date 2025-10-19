import React from "react";
import TitleService from "./_components/TitleSerivce";
import serviceById from "../../../../../public/constant/service-by-id";
import SideBar from "./_components/SideBar";
import ContentService from "./_components/ContentService";
import OurService from "./_components/OurService";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const service = serviceById.find((service) => service.id === id);

  return (
    <div>
      <TitleService
        title={service ? service?.title : ""}
        subtitle={service ? service?.subtitle : ""}
        description1={service ? service?.description : ""}
        image={service ? service?.main_image : null}
      />

      <div className="container_main">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <SideBar />
          <ContentService
            descriptionHtml={service ? service?.descriptionHtml : ""}
          />
        </div>
      </div>

      <OurService
        imageUrl={service ? service?.second_image : ""}
        services={service ? service?.services : []}
      />
    </div>
  );
}
