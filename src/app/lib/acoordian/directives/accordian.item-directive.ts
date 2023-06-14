import { ContentChild, Directive, Input } from "@angular/core";
import { AccordionContent } from "./accordian.content-directive";
import { AccordionTitle } from "./accordian.title-directive";
import { AccordionHeader } from "./accordian.header-directive";

@Directive({
    selector: "accordion-item"
  })
  export class AccordionItem {
    @Input() title = "";
    @Input() disabled = false;
    @ContentChild(AccordionContent)
    content!: AccordionContent;
    @ContentChild(AccordionTitle) customTitle!: AccordionTitle;
    @ContentChild(AccordionHeader) customHeader!: AccordionHeader;
  }
  