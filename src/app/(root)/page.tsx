/* eslint-disable @next/next/no-html-link-for-pages */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, PlugZap, Shield, ToolCase } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col w-full h-full px-16">
          {/* Header with Hero section */}
          <header className="h-full">
            <nav className="w-full h-14 flex flex-1 justify-evenly py-3">
              <div>
                <h1>Logo</h1>
              </div>
              <ul className="w-max px-4 py-3 sticky flex items-center justify-center gap-x-4">
                <li>About</li>
                <li>Specifications</li>
                <li>How-to</li>
                <li>Pricing</li>
              </ul>
              <div>
                <a href="/sign-in">
                  <Button>Get Started</Button>
                </a>
              </div>
            </nav>
            <div className="w-full flex flex-col gap-y-2">
              <h2>Just Build Your Store.</h2>
              <div>
                {/* Image of the system section - later add a overlay video */}
              </div>
              {/* Trusted by partners which we can add later */}
            </div>
          </header>

          <section>
            <div className="w-full flex flex-col gap-y-2">
              <div>
                <small>About</small>
                <h2>Power all your stores from single platform</h2>
              </div>
              <div className="w-full grid grid-cols-4 grid-rows-1 gap-8 border-t-[1px] pt-[16px]">
                <Card>
                  <CardHeader className="w-full flex flex-col lg:justify-center lg:items-center gap-y-3">
                    <Shield strokeWidth={1} className="sm:size-4 md:size-8" />
                    <h2>Safe & Efficient</h2>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus atque rem ratione similique veritatis aperiam
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="w-full flex flex-col lg:justify-center lg:items-center gap-y-3">
                    <PlugZap strokeWidth={1} className="sm:size-4 md:size-8" />
                    <h2>Easy to Implement</h2>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus atque rem ratione similique veritatis aperiam
                      quia totam magnam earum architecto accusamus, culpa odio
                      nostrum beatae neque iure illo rerum molestias.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="w-full flex flex-col lg:justify-center lg:items-center gap-y-3">
                    <ToolCase strokeWidth={1} className="sm:size-4 md:size-8" />
                    <h2>Rich Tool Support</h2>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus atque rem ratione similique veritatis aperiam
                      quia totam magnam earum architecto accusamus, culpa odio
                      nostrum beatae neque iure illo rerum molestias.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="w-full flex flex-col lg:justify-center lg:items-center gap-y-3">
                    <Globe strokeWidth={1} className="sm:size-4 md:size-8" />
                    <h2>Open Source</h2>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus atque rem ratione similique veritatis aperiam
                      quia totam magnam earum architecto accusamus, culpa odio
                      nostrum beatae neque iure illo rerum molestias.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
