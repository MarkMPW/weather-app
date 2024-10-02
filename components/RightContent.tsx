import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import Card from "./Card";
import { WeeklyData } from "@/constants/weeklyData";

const RightContent = () => {
  return (
    <section className="bg-[#f1f2fa] px-12 py-9 rounded-tr-3xl rounded-br-3xl hidden lg:block">
      <div className="container min-w-[540px]">
        <Tabs defaultValue="week">
          <TabsList>
            <div>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
            </div>
            <div className='flex items-center gap-5'>
              <Button className='rounded-full text-lg'>°C</Button>
              <Button className='rounded-full text-lg'>°F</Button>
              <Avatar className='ml-4'>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </TabsList>
          <TabsContent value="today">Today</TabsContent>
          <TabsContent value="week" className='inline-flex mt-10 gap-2'>
            {WeeklyData.map((date, index) => (
              <Card key={index} date={date}/>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default RightContent;
