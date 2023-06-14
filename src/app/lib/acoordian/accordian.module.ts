import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AccordionComponent } from "./accordian.component";
import { AccordionItem } from "./directives/accordian.item-directive";
import { AccordionContent } from "./directives/accordian.content-directive";
import { AccordionTitle } from "./directives/accordian.title-directive";
import { AccordionHeader } from "./directives/accordian.header-directive";

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader
  ],
  imports: [CommonModule],
  exports: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader
  ]
})
export class AccordionModule {}
