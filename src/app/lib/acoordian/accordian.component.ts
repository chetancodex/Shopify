import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef } from "@angular/core";
import { AccordionItem } from "./directives/accordian.item-directive";



@Component({
    selector: "accordion",
    templateUrl: "./accordian.component.html",
   
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class AccordionComponent {
    expanded = new Set<number>();
    /**
     * Decides if the single item will be open at once or not.
     * In collapsing mode, toggling one would collapse others
     */
    @Input() collapsing = true;
    @Input()
    ngTemplateOutlet!: TemplateRef<any> | null
    @ContentChildren(AccordionItem) items!: QueryList<AccordionItem>;
  
    /**
     * Make the toggle function available to be called from
     * outside.
     * @param index - Index of the accordion item
     */
    getToggleState = (index: number) => {
      return this.toggleState.bind(this, index);
    };
  
    toggleState = (index: number) => {
      if (this.expanded.has(index)) {
        this.expanded.delete(index);
      } else {
        if (this.collapsing) {
          this.expanded.clear();
        }
        this.expanded.add(index);
      }
    };
  }
  