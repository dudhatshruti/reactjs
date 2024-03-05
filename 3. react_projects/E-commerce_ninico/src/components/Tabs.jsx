import React from "react";
import { Tab } from "@headlessui/react";

const Tabs = () => {
  return (
    <div className="container mx-auto">
      <div className="row ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 ">
            <div className="product-detail tabs mb-14 ">
                <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto"> 
              <Tab.Group>
                
                <Tab.List className="flex space-x-1 rounded-xl p-1  ">
                  <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ">description</Tab>
                  <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700">additional information</Tab>
                  <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700">reviews (2)</Tab>
                </Tab.List>
                
                <Tab.Panels className="mt-2">
                  <Tab.Panel className="rounded-xl"><p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus veniam voluptate hic consectetur. Aperiam alias adipisci fugit
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, accusantium et iusto modi nisi atque corporis cum odio, quaerat doloremque illum! Facere ex corporis quia laudantium necessitatibus consequuntur dolorem harum nesciunt a illum omnis debitis aspernatur blanditiis voluptatum sequi similique quam fugit minus, fuga nemo quis? Omnis placeat excepturi illo. </p></Tab.Panel>
                  <Tab.Panel className="rounded-xl bg-white p-3">Content 2</Tab.Panel>
                  <Tab.Panel className="rounded-xl bg-white p-3">Content 3</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
