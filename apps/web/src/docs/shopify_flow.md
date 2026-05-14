# Chapter 1

# Why Automation Is Essential for Ecommerce

Are you tired of spending countless hours on repetitive tasks, struggling to keep up with orders, and finding it difficult to scale your online store? If so, you're not alone.

Estimated 8 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [The scaling challenge with SVAL Gear](#the-scaling-challenge-with-sval-gear)
- [What is ecommerce automation?](#what-is-ecommerce-automation)
- [How can ecommerce automation improve business operations?](#how-can-ecommerce-automation-improve-business-operations)
- [The advantages of ecommerce automation](#the-advantages-of-ecommerce-automation)
  - [Operational efficiency](#operational-efficiency)
  - [Business growth and scalability](#business-growth-and-scalability)
  - [Enhanced customer and employee experience](#enhanced-customer-and-employee-experience)
- [The power of automation with Shopify Flow](#the-power-of-automation-with-shopify-flow)
- [To Flow or not to Flow](#to-flow-or-not-to-flow)
- [Streamlining operations with Shopify Flow](#streamlining-operations-with-shopify-flow)
  - [Nurture customer relationship](#nurture-customer-relationship)
  - [Improve team communication](#improve-team-communication)
  - [Maintain clean and accurate data](#maintain-clean-and-accurate-data)
- [Conclusion](#conclusion)
  - [Next steps:](#next-steps)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [The scaling challenge with SVAL Gear](#the-scaling-challenge-with-sval-gear)
- [What is ecommerce automation?](#what-is-ecommerce-automation)
- [How can ecommerce automation improve business operations?](#how-can-ecommerce-automation-improve-business-operations)
- [The advantages of ecommerce automation](#the-advantages-of-ecommerce-automation)
  - [Operational efficiency](#operational-efficiency)
  - [Business growth and scalability](#business-growth-and-scalability)
  - [Enhanced customer and employee experience](#enhanced-customer-and-employee-experience)
- [The power of automation with Shopify Flow](#the-power-of-automation-with-shopify-flow)
- [To Flow or not to Flow](#to-flow-or-not-to-flow)
- [Streamlining operations with Shopify Flow](#streamlining-operations-with-shopify-flow)
  - [Nurture customer relationship](#nurture-customer-relationship)
  - [Improve team communication](#improve-team-communication)
  - [Maintain clean and accurate data](#maintain-clean-and-accurate-data)
- [Conclusion](#conclusion)
  - [Next steps:](#next-steps)

Many ecommerce businesses face these challenges as they grow. Fortunately, there’s a powerful solution – ecommerce automation.

This article will introduce you to the world of ecommerce automation and explore how it can transform your business. We’ll define ecommerce automation and discuss its key benefits. Then, we’ll introduce Shopify Flow and show you how it can help you implement automation in your Shopify store.

## The scaling challenge with SVAL Gear

![Flow](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742401126%2FSVAL+Gear+on+on+the+Slopespng.1742401126321.png)

Imagine a winter sports lifestyle brand called SVAL Gear. They’ve experienced impressive growth, doubling their sales for two consecutive years, building partnerships with retailers, and launching new snowboards. It sounds exciting, right?

However, this growth has also revealed some serious inefficiencies in their operations.

For example, SVAL Gear struggles with low stock alerts for their popular items. Their current process involves manually checking inventory once a week, updating their storefront if a product is out of stock, and notifying the purchasing team. This is time-consuming, prone to errors, and distracts their staff from more strategic work.

SVAL Gear’s situation illustrates a common challenge: as businesses grow, increased demands and complexity often lead to inefficient systems and workarounds.

## What is ecommerce automation?

Ecommerce automation involves transforming manual processes in your business operations into powerful workflows. Instead of manually handling tasks like checking inventory, sending customer emails, or updating order statuses, you can use automation tools to handle these tasks automatically.

## How can ecommerce automation improve business operations?

Expand the sections below to explore some of the areas where ecommerce automation can make a significant difference.

Customer segmentation and personalization

Typical manual process

Manually reviewing customer data (purchase history, spending habits, behavior) to identify customer segments and create targeted marketing campaigns or personalized offers.

Automation opportunity

Automating customer segmentation enables targeted marketing and personalized offers.

For example, you can automatically tag customers based on purchase history, spending habits, or storefront interactions to send tailored discounts or promotions.

Order management

Typical manual process

Manually tagging, routing, and updating order status.

Automation opportunity

Automating order management improves processing efficiency and reduces errors.For example, you can automate tasks like tagging orders based on specific criteria, sending notifications to fulfillment teams.

Inventory management

Typical manual process

Manually managing inventory levels, hiding out-of-stock products, and notifying the team of low-stock products.

Automation opportunity

Automating inventory management ensures accurate control and prevents overselling. For example, automation can help you automatically adjust inventory levels, hide out-of-stock products, and send low-stock alerts.

Customer communication

Typical manual process

Manually responding to customer inquiries, identifying high-value customers, and processing returns.

Automation opportunity

Automating customer communication enhances service and improves satisfaction. For example, when a customer has opted into your marketing email you personalize campaigns based on their buying behavior and streamline return processing.

Marketing automation

Typical manual process

Manually segmenting customers and sending marketing emails.

Automation opportunity

Automating marketing tasks enables targeted campaigns and saves time. For example, you can automate customer segmentation, personalized email sequences, abandoned cart reminders, and loyalty rewards.

## The advantages of ecommerce automation

Ecommerce automation offers significant advantages for businesses, primarily centered around: operational efficiency, business growth and scalability, and enhanced customer and employee experience.

### Operational efficiency

Automation streamlines processes, reduces errors, and increases productivity. It optimizes resource management, allowing businesses to scale effectively without a proportional increase in workload or hiring. This leads to reduced operational costs and frees up employees to focus on higher-value tasks.

### Business growth and scalability

By unlocking new capabilities and automating key processes, automation enables businesses to overcome growth challenges and scale more effectively. It provides the tools to manage increased demand, implement new strategies, and adapt to market changes, fostering sustainable growth.

### Enhanced customer and employee experience

Automation improves customer experiences by providing seamless, personalized interactions, timely support, and consistent communication. It also enhances employee satisfaction by reducing repetitive tasks, increasing accuracy, and creating a more productive and engaging work environment.

Now that you understand the value of ecommerce automation, let’s explore how Shopify Flow can help you implement it.

## The power of automation with Shopify Flow

Shopify Flow is a powerful tool that empowers you to implement automation in your Shopify store, regardless of your technical skills. With its intuitive interface and pre-built templates, you can easily automate tasks, improve efficiency, and scale your business. Let’s get to know Flow.

Video Transcript

Imagine easily sending personalized discounts to your customers, launching tailored marketing campaigns, and implementing custom upselling strategies after checkout. All of this magic and more is possible with Shopify Flow, a powerful automation tool built by Shopify. With you in mind. Shopify Flow Automation lets you customize how Shopify works for your business.

It effortlessly handles tasks that are time consuming and tedious to do manually. By automating these tasks, you’re not only discovering growth opportunities, you’re also scaling your business efficiently, freeing up your time to concentrate on tasks that truly matter, like enhancing customer relationships, product development, and strategic planning. Here are some ways you can use Shopify Flow Automation in your business. Fulfill orders.

Manage inventory. Send marketing emails. Cancel and restock high risk orders. Manage and review your loyalty program.

Shopify flow uses an intuitive visual flow chart interface that’s easy to understand, making setup, and management of these automations a breeze. The editor allows you to create and edit parts of the automation in any order. Through a combination of triggers, conditions, and actions. You can build custom automations. Triggers are events that start a workflow.

Conditions are rules that determine if an action should be taken. Actions are the steps that are automated when the conditions of a workflow are met. And the best part? You don’t need any coding skills to use it.

Shopify flow connects to the existing apps and business tools you’re already using. Accessing virtually any Shopify data point, and if you’re not sure where to start, it even offers pre-built templates. Embrace automation with Shopify Flow to scale your business effectively. Seize growth opportunities and reclaim your time.

Get started now.

## To Flow or not to Flow

Shopify Flow is a powerful tool, but it’s not the right solution for every automation or business need. Before you dive into building workflows, it’s important to understand what it is and what it isn’t.

| Flow is ideal for:                                                | Flow is not:                            |
| ----------------------------------------------------------------- | --------------------------------------- |
| Customizing Shopify to suit your needs                            | A business consultant                   |
| Automating tasks with a no/low-code approach                      | A solutions engineer                    |
| Replicating business logic to save time                           | Generative AI                           |
| Articulating your own problem and designing a repeatable solution | A replacement for human decision-making |
| Connecting different apps to create more complex workflows        | A tool for complex financial analysis   |

## Streamlining operations with Shopify Flow

### Nurture customer relationship

Provide relevant information and offers at each stage of the customer journey without constant manual oversight.

For example, you can use Shopify Flow to automatically send a personalized welcome email to new customers, offer a discount code on their next purchase, or send a follow-up email after a purchase to request a product review.

### Improve team communication

Automate notifications to enhance work visibility, promote accountability, and reduce departmental silos.

For example, you can set up Shopify Flow to automatically notify the fulfillment team when a high-priority order is placed or to alert the customer service team when a customer submits a return request.

### Maintain clean and accurate data

Create precise customer segments and automatically update based on the defined triggers, conditions, and actions you set.

For example, you can use Shopify Flow to automatically tag customers based on their purchase behavior or to automatically remove customers who haven’t made a purchase in a certain period from your marketing lists.

## Conclusion

In today’s competitive ecommerce landscape, automation is no longer a luxury—it’s a necessity. By automating repetitive tasks and streamlining your operations, you can free up time to focus on growing your business and providing exceptional customer experiences.

### Next steps:

1.  Install the [Shopify Flow app](https://apps.shopify.com/flow) in your Shopify Store
2.  Brainstorm one automation idea for a manual process in your business.
3.  Use your automation idea as you explore the search bar and filters in the [Shopify Flow template library](https://admin.shopify.com/apps/flow/web/editor/templates?sort=best_match), It provides hundreds of examples that demonstrate how to use Flow for you to install into your Shopify store.

# Chapter 2

# Shopify Flow core components

Let’s start by breaking down the core components that work together to create automations that streamline your business.

Estimated 8 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [SVAL Gear’s first workflow](#sval-gears-first-workflow)
- [Triggers](#triggers)
  - [SVAL Gear’s selected trigger](#sval-gears-selected-trigger)
- [Conditions](#conditions)
  - [SVAL Gear’s selected conditions](#sval-gears-selected-conditions)
- [Actions](#actions)
  - [SVAL Gear’s selected actions:](#sval-gears--selected-actions)
- [Data](#data)
  - [Understanding data and the Shopify Admin API](#understanding-data-and-the-shopify-admin-api)
  - [How Flow uses the Admin API](#how-flow-uses-the-admin-api)
  - [Understanding the data in SVAL Gear’s VIP customer workflow](#understanding-the-data-in-sval-gears-vip-customer-workflow)
  - [Trigger](#trigger)
  - [Conditions](#conditions-1)
  - [Actions](#actions-1)
- [Top four takeaways](#top-four-takeaways)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [SVAL Gear’s first workflow](#sval-gears-first-workflow)
- [Triggers](#triggers)
  - [SVAL Gear’s selected trigger](#sval-gears-selected-trigger)
- [Conditions](#conditions)
  - [SVAL Gear’s selected conditions](#sval-gears-selected-conditions)
- [Actions](#actions)
  - [SVAL Gear’s selected actions:](#sval-gears--selected-actions)
- [Data](#data)
  - [Understanding data and the Shopify Admin API](#understanding-data-and-the-shopify-admin-api)
  - [How Flow uses the Admin API](#how-flow-uses-the-admin-api)
  - [Understanding the data in SVAL Gear’s VIP customer workflow](#understanding-the-data-in-sval-gears-vip-customer-workflow)
  - [Trigger](#trigger)
  - [Conditions](#conditions-1)
  - [Actions](#actions-1)
- [Top four takeaways](#top-four-takeaways)

- **Triggers** are events that start a workflow
- **Conditions** are rules that determine the next step in a workflow
- **Actions** are the steps that modify your store, affect data in the workflow, or interact with external apps and services.
- **Data** is accessed from your store to initiate triggers, evaluate conditions, and execute actions.
- **Workflows** are the automated sequences of triggers, conditions, and actions that streamline ecommerce operations.

Before we dive into the details of each core component, let’s get a high-level overview. We’ll review each component’s role and explore examples in an example workflow with SVAL Gear.

### SVAL Gear’s first workflow

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2Fa5kvkze8ki7bepnyswywp8vdk%2Fpublic%2F1742416158%2Fbanner+1.1742416158766.jpg)

SVAL Gear, the winter sports lifestyle brand, is just getting started with automating their manual business operations with Shopify Flow.

The goal of their first workflow is to monitor all orders to check if the amount is $500 or more so that they can tag VIP customers in their Shopify admin and offer these VIP customers a promotional discount on their next purchase.

## Triggers

Triggers are the starting point of a workflow. They are webhooks that listen for “when” the specific events you select happen in your Shopify store. The trigger monitors your store data and starts a workflow in response to a specific event.

### SVAL Gear’s selected trigger

**Start when:** `order paid`

SVAL Gear selects the [order paid](https://help.shopify.com/manual/shopify-flow/reference/triggers/order-paid) trigger event. They choose this trigger because they only want the workflow to start when an order is paid.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742399804%2F1.+C1-L1+Trigger+Order+Paid.1742399803891.png)

## Conditions

Conditions define workflow rules and sort events into their next steps based on the set criteria. They query and evaluate data from the Admin API to “check if ” the criteria you set. If conditions are met, the workflow takes the corresponding actions.

### SVAL Gear’s selected conditions

**Check if:** `order.totalPriceSet.presentmentMoney.amount` `is greater than or equal to` `500`

These conditions set the rules for the workflow to only proceed to the actions **IF** the conditions are met.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742399931%2F2.+C1+L1+Condition+-500.1742399930884.png)

## Actions

Actions execute your defined outcomes in a workflow. They manipulate and mutate data in your store or do something with an external app or service through the API admin. When a workflow is activated, triggered by an event that meets your set conditions, actions have permission to execute.

### SVAL Gear’s selected actions:

**Do this:** `Add Customer tags` ”VIP” **AND** `send a marketing email` “VIP discount on next purchase”

SVAL Gear selects two actions:

1.  `Add customer tag`: This action adds a “VIP” tag to the customer’s profile in the Shopify admin
2.  `Send marketing email`: This action sends the customer an email campaign named “VIP discount on next purchase” for the customer to use a promo code for their next purchase.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742399989%2F3.+C1-L1+Action+Add+VIP+Customer+Tag.1742399988865.png)

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400049%2F4.+C1+Action+Send+marketing+email+-VIP+discount+on+next+purchase-.1742400049314.png)

By combining the core components of Shopify Flow, SVAL Gear creates a workflow that automatically identifies high-value customers and rewards them with a promo code, nurturing customer loyalty and encouraging repeat business.

## Data

Shopify Flow uses data from your store to power its triggers, evaluate conditions, and execute actions. This data is automatically accessed by Flow, but you need to understand how to reference it correctly within your workflows.

### Understanding data and the Shopify Admin API

Shopify Flow uses the [Shopify GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql) to access and work with your store’s data. This API allows Flow to:

- **Retrieve (query) data:** Get information about your store, such as orders, customers, products, and inventory
- **Modify (mutate) data:** Make changes to your store’s data, such as adding tags to customers or updating order notes
- **Interact with apps:** Connect with third-party apps that have GraphQL API integrations

### How Flow uses the Admin API

Flow uses the Admin API in all aspects of a workflow:

- **Triggers:** When a trigger event occurs, Flow uses the Admin API to gather information about that event
- **Conditions:** Flow uses the Admin API to evaluate conditions and determine the next step in the workflow
- **Actions:** Flow uses the Admin API to execute actions, such as adding tags, sending emails, or updating orders

### Understanding the data in SVAL Gear’s VIP customer workflow

Let’s revisit SVAL Gear’s workflow, where they want to automatically tag high-value customers and send them a marketing email with promo code on their next purchase:

- **Trigger:** Start when `Order paid`
- **Condition:** Check if `order.totalPriceSet.presentmentMoney.amount` is `greater than or equal to` `500`
- **Actions:** Then `Add VIP customer tag` **AND** \`Send marketing email’ to the customer with promo code

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400090%2F5.+C1-L1+SVAL+Data+Gear-s+VIP+Customer+Workflow.1742400089950.png)

Lets organize how Flow uses the Admin API by trigger, condition, and action.

### Trigger

When the `Order paid` trigger event occurs, Flow uses the Admin API to retrieve (query) the order total: access the order’s data and retrieve the total amount paid.

Pro tip: When selecting triggers you can always inspect the information icon to “Learn more” and gain instant access to the specific help document where you can investigate the trigger you selected . For this case the information icon would direct you to the [order paid](https://help.shopify.com/manual/shopify-flow/reference/triggers/order-paid) help center documentation.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400118%2F6.+C1+inspect+the+information+icon.1742400118718.png)

### Conditions

Checks if the `order.totalPriceSet.presentmentMoney.amount` is `greater than or equal to` `500`.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400175%2F7.+C1+Checks+if+the+%60order.totalPriceSet.presentmentMoney.amount%60+is+%60greater+than+or+equal+to%60%60+%60500%60..1742400175559.png)

These conditions “check if” the total amount the customer paid for their order (in their own currency) is $500 or more. Let’s use the table below to breakdown how the conditions query the Admin API and return data to the workflow for the set conditions to evaluate:

| Condition Criteria                                                      |                            | Description                                                                                                                           |
| ----------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Path** of the field being evaluated.                                  | `order`                    | The `order` object returned by the trigger from the Shopify GraphQL Admin API.                                                        |
|                                                                         | `totalPriceSet`            | Field on the `order` object representing the price.                                                                                   |
|                                                                         | `presentmentMoney`         | Field on the `totalPriceSet` that specifies the price in the customer’s presentment currency – the currency used for the transaction. |
|                                                                         | `amount`                   | Field on the `presentmentMoney` that specifies the numerical value of the price in the presentment currency.                          |
| Logical operator used to compare the order’s price to a specific value. | `greater than or equal to` | Checks if the numerical value of the order’s total paid price in the customer’s currency is greater than or equal to a specific value |
| Value used for the comparison.                                          | `500`                      | Checks if the order decimal amount qualifies as $500 or more defined by the logical operator.                                         |

### Actions

1.  **Add the VIP tag:** If the condition is met, Flow uses the Admin API to modify the customer’s data (store data) and `Add the customer tag` “VIP”

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400325%2F8.+C1+%60Add+the+customer+tag+%E2%80%9CVIP%E2%80%9D+.1742400324934.png)

2.  **Send the marketing email:** Flow uses the Admin API (and potentially a third-party email app integration) to `send the marketing email` named “VIP discount on next purchase”.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400470%2F9.+C1+%60send+the+marketing+email%60+named+%E2%80%9C%E2%80%9CVIP+discount+on+next+purchase_..1742400470281.png)

This example demonstrates how Shopify Flow seamlessly uses the Shopify GraphQL Admin API throughout the workflow to access data, evaluate conditions, and execute actions, ultimately automating SVAL Gear’s process of rewarding their high-value customers.

## Top four takeaways

You’ve gained a foundational understanding of Shopify Flow’s core components. Remember these key takeaways:

- **Triggers** initiate workflows. They listen for **“when”** the specific events you select happen in your Shopify store.
- **Conditions** guide workflows. They use variable paths to evaluate data from the Admin API to “**check if”** the set criteria is true or false, directing actions based on logical operators and specific values
- **Actions** perform tasks. When an event is triggered and conditions are met, actions then “**Do this”** by modifying or mutating your store data, executing the criteria set in the workflow.
- **Data** powers workflows. Flow uses data from your store to power its triggers, evaluate conditions, and execute actions.

With this knowledge, you’re well on your way to leveraging the full potential of Shopify Flow. Understanding these components allows you to build custom workflows and tailor automations to your specific business needs. Later in this course we will explore each core component in detail, but before we go there, we need to get to how to use a Shopify flow template.

Chapter 3

# Getting Started with Shopify Flow Templates

Shopify Flow offers a library of pre-built templates to help you get started with automation. The video below demonstrates how to use a template to create a workflow.

Estimated 1 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Activity: Explore Shopify Flow templates](#activity-explore-shopify-flow-templates)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Activity: Explore Shopify Flow templates](#activity-explore-shopify-flow-templates)

## Activity: Explore Shopify Flow templates

You’ve learned that Shopify Flow templates offer a quick way to automate tasks using pre-configured triggers, conditions, and actions. Now, it’s your turn to explore!

1.  Go to your Shopify admin and [install](https://apps.shopify.com/flow) or [open](https://admin.shopify.com/apps/flow) the Shopify Flow app.
2.  Browse the [template library](https://admin.shopify.com/apps/flow/web/editor/templates?sort=best_match) by searching for an automation goal or tinkering with the filters.
3.  Select a template that could be useful for your store.
4.  Think about how you might customize this template to fit your specific needs.

Chapter 4

# Trigger

The events that initiate a workflow

Estimated 6 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Trigger categories](#trigger-categories)
- [Choosing the right trigger](#choosing-the-right-trigger)
  - [Specificity](#specificity)
  - [Timing](#timing)
  - [Data availability](#data-availability)
- [Exploring trigger examples with Shopify Flow templates](#exploring-trigger-examples-with-shopify-flow-templates)
- [Testing your trigger](#testing-your-trigger)
  - [How Log output works](#how-log-output-works)
  - [Activity: How to test your trigger](#activity-how-to-test-your-trigger)
- [Top three takeaways: Triggers](#top-three-takeaways-triggers)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Trigger categories](#trigger-categories)
- [Choosing the right trigger](#choosing-the-right-trigger)
  - [Specificity](#specificity)
  - [Timing](#timing)
  - [Data availability](#data-availability)
- [Exploring trigger examples with Shopify Flow templates](#exploring-trigger-examples-with-shopify-flow-templates)
- [Testing your trigger](#testing-your-trigger)
  - [How Log output works](#how-log-output-works)
  - [Activity: How to test your trigger](#activity-how-to-test-your-trigger)
- [Top three takeaways: Triggers](#top-three-takeaways-triggers)

Triggers are the catalysts of your Shopify Flow workflows, setting your automations into motion. They include events like a new order being placed, a customer creating an account, or a product’s inventory level changing. By understanding the available triggers, you can automate responses to a wide range of events within your Shopify store.

## Trigger categories

Shopify Flow organizes triggers into categories based on what they do in your store so that you can easily find the trigger you need to automate your tasks. Here is a breakdown of the trigger category, workflow use cases, and examples of specific trigger events that would initiate the workflow.

| Trigger category         | Workflow use cases                                                                                                                                    | Initiates when                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| B2B                      | Automate wholesale workflows, like sending notifications when a company is created or updating inventory when a quote is accepted.                    | Company created                                               |
| Customers                | Manage customer interactions, such as tagging high-value customers or sending welcome emails to new subscribers.                                      | Customer created Customer enabled Customer tag added          |
| Discounts and marketing  | Automate marketing tasks, like sending a notification when a discount code is created.                                                                | Customer abandons checkout                                    |
| Metaobjects              | Build custom workflows based on your unique data structures.                                                                                          | Metaobject entry created                                      |
| Orders                   | Automate order processing, fulfillment, and customer communication. Examples: Tag high-value orders, send shipping notifications, or trigger refunds. | Order created Order paid Order refunded                       |
| Products and collections | Manage inventory, update product details, and automate collection changes.                                                                            | Product created Inventory updated Product added to collection |
| Shipping and fulfillment | Streamline shipping and fulfillment tasks, such as sending notifications when orders are fulfilled or updating inventory levels.                      | Fulfillment created                                           |

For a comprehensive list of all available triggers and their details, refer to [triggers in Shopify Flow](https://help.shopify.com/manual/shopify-flow/reference/triggers) in the Shopify Help Center.

## Choosing the right trigger

The success of your workflow depends on choosing the right trigger. When making your selection, it is important to consider the specificity, timing, and availability of data.

### Specificity

Choose a trigger that initiates only when you need it to. For example, use the ‘Order paid’ trigger instead of ‘Order created’ to tag high-value customers who complete their purchase.

### Timing

Ensure that the trigger initiates at the correct point at the workflow’s process. If you need data from an order, make sure that data is available when the workflow runs. For example, for fraud workflows, risk analysis takes some time, so we often suggest using “Order risk analyzed” rather than “Order created” so that the data is available.

### Data availability

Verify that the trigger provides the required data for subsequent steps of the workflow. For example, if you want to send a marketing email to a customer, make sure the trigger provides customer details like their name and email address.

## Exploring trigger examples with Shopify Flow templates

We’ve covered the different types of triggers in Shopify Flow. Now let’s see how they’re used in real-world scenarios. Shopify Flow offers pre-built templates that use various triggers to automate common tasks. By exploring these templates, you can:

- Learn how different triggers are used and how they initiate a workflow
- Understand the relationship between triggers and actions
- Get inspiration for your own workflows and use the templates as a starting point

Use the table below to explore examples of how different types of triggers can automate tasks and operations in your store.

| Trigger                                    | Flow template                                                                                                                                                                                                      | About this Flow template                                                                                                                                                                                                     |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Order created                              | [Organize customers by order count tiers](https://admin.shopify.com/apps/flow/editor/templates/37703f97-dd66-46fd-9a99-2eb49f5c6a9d?search=tag+customers&sort=best_match&apps=SHOPIFY)                             | Add customer tags based on order count tiers for targeted loyalty and marketing communications.                                                                                                                              |
| Customer abandons checkout                 | [Recover abandoned cart](https://admin.shopify.com/apps/flow/editor/templates/66ea75fc-d6f8-473f-a2ca-01ef75d296f5?search=abandoned+cart+reminders&sort=best_match&apps=SHOPIFY)                                   | Send a marketing email when a customer adds at least one product to their cart but doesn’t proceed to checkout. It excludes customers who received an abandoned checkout, cart, or product browse email in the last 14 days. |
| Product variant inventory quantity changed | [Get notified by email when product variant inventory is low](https://admin.shopify.com/apps/flow/editor/templates/6078af13-af76-49e5-aeda-c9c1ee11eea1?apps=SHOPIFY&search=inventory&sort=best_match)             | In this low stock notification, you can get notified by email when any of your variant’s inventory becomes low.                                                                                                              |
| Workflow error occurred                    | [Get a Shopify alert when workflow run errors are detected](https://admin.shopify.com/apps/flow/editor/templates/73b9ccc6-7f1b-421a-8bff-db59b023d496?search=Monitor+workflow+errors&sort=best_match&apps=SHOPIFY) | Receive a Shopify alert if one of your workflows fails to execute.                                                                                                                                                           |

## Testing your trigger

Not sure if you’ve chosen the right trigger? No worries! You can test it without affecting your store’s data. Shopify Flow’s [Log output action](https://help.shopify.com/manual/shopify-flow/reference/actions/log-output) lets you see what’s happening behind the scenes.

### How Log output works

The “Log output” action records information about your workflow in the run logs. This helps you understand what data the trigger is capturing and how your workflow is processing it, all without making any actual changes to your store. Think of it as a sneak peek into your workflow’s activity.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400492%2F10.+C1+Testing+Triggers+With+Order+Paid+and+Log+Output.1742400491908.png)

### Activity: How to test your trigger

1.  Create a new workflow named “Trigger test with Log output”
2.  Add a trigger and select the **Order paid** trigger
3.  Then, add a **Log output action**
4.  In the **Output** section of the action sidebar paste in: `{{order.totalPriceSet.presentmentMoney.amount}}{{order.email}}{{order.shippingAddress.country}}`
5.  **Turn on your workflow**
6.  Go to the Admin
    1.  Create a fake order
    2.  Add a product and customer
    3.  Mark the order as paid
7.  Return to your “Trigger test with Log output” workflow
8.  Below the workflow editor, check the run logs
9.  The Log output action will show you what data was captured by the trigger.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400584%2F11.++C1+Test+your+trigger+results.1742400584083.png)

By actively testing your triggers with the Log output action, you preview the impact of your workflows and refine your tiggers with confidence.

## Top three takeaways: Triggers

- Trigger events set your automations in motion in response to specific events in your Shopify store
- Triggers enable you to automate responses to a wide range of events, such as new orders, customer account creations, and inventory changes
- When you are selecting a trigger, it is important to consider: specificity, timing, and availability of data

Chapter 5

# Conditions

The rules that determine the next step in a workflow.

Estimated 11 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [How conditions work](#how-conditions-work)
- [Types of conditions](#types-of-conditions)
- [Working with data](#working-with-data)
- [Logical operators](#logical-operators)
  - [Field-level operators compare two values](#field-level-operators-compare-two-values)
    - [Types of field-level operators](#types-of-field-level-operators)
- [Exploring field-level operators](#exploring-field-level-operators)
  - [List operators](#list-operators)
    - [Shopify Flow offers three list operators:](#shopify-flow-offers-three-list-operators)
  - [Null or empty operators](#null-or-empty-operators)
    - [Types of null or empty operators](#types-of-null-or-empty-operators)
- [Ordering and combining conditions](#ordering-and-combining-conditions)
  - [Example: SVAL Gear’s free shipping on next order](#example-sval-gears-free-shipping-on-next-order)
- [Choosing the right conditions](#choosing-the-right-conditions)
  - [Pro tips for choosing conditions](#pro-tips-for-choosing-conditions)
- [Top three takeaways: Conditions](#top-three-takeaways-conditions)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [How conditions work](#how-conditions-work)
- [Types of conditions](#types-of-conditions)
- [Working with data](#working-with-data)
- [Logical operators](#logical-operators)
  - [Field-level operators compare two values](#field-level-operators-compare-two-values)
    - [Types of field-level operators](#types-of-field-level-operators)
- [Exploring field-level operators](#exploring-field-level-operators)
  - [List operators](#list-operators)
    - [Shopify Flow offers three list operators:](#shopify-flow-offers-three-list-operators)
  - [Null or empty operators](#null-or-empty-operators)
    - [Types of null or empty operators](#types-of-null-or-empty-operators)
- [Ordering and combining conditions](#ordering-and-combining-conditions)
  - [Example: SVAL Gear’s free shipping on next order](#example-sval-gears-free-shipping-on-next-order)
- [Choosing the right conditions](#choosing-the-right-conditions)
  - [Pro tips for choosing conditions](#pro-tips-for-choosing-conditions)
- [Top three takeaways: Conditions](#top-three-takeaways-conditions)

Conditions are the intelligent decision-makers in your Shopify Flow workflows. They evaluate API queries to “check if” the set criteria is true or false, guiding your workflow down different paths based on specific rules. Think of them as the “brains” of your automations, ensuring that actions are only executed when specific criteria are met. By mastering conditions, you can create truly smart workflows that adapt to various scenarios and optimize your store’s operations.

## How conditions work

Every condition checks if specific rules are met. These rules use data from your store (like an order value or customer tag), a logical operator (like “equals” or “greater than”), and a value to compare against (like a specific number or tag).

When a workflow encounters a condition, it checks if certain rules are met. These rules are based on:

- **Data:** Information from your store, like a product title or order value
- **Logical operator:** How you want to compare the data (e.g., “equal to,” “greater than”).
- **Value:** What you’re comparing the data against (e.g., a specific product title or a number)

If the condition is met (true), the workflow proceeds down one path. If not (false), it takes a different path. Let’s look at a simple example:

**Condition:** check if order value is `greater than 500`

- **True:** The workflow might tag the customer as `VIP Customer`
- **False:** The workflow might do nothing or send a different notification

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742573289%2FC1-++Conditions-+SVAL+Gear-s+VIP+Customer+Workflow.1742573289464.png)

## Types of conditions

Shopify Flow offers various types of conditions to meet diverse automation needs. [Logical operators](https://help.shopify.com/manual/shopify-flow/reference/conditions#logical-operators) define how your condition is applied. Conditions can check simple properties such as whether an order’s total is above a certain amount, or opts-in to marketing email. Logical Operators can be either field-level operators or list operators.

Shopify Flow offers various ways to build conditions:

**Simple conditions**

Check if a single piece of data: For example: **CHECK IF** the product title is `Purple Snowboard`

**List operators**

Check if any or all items in a list meet certain criteria. For example: **CHECK IF** at least one product tag is `BFCM`

**Combined conditions**

Use **AND** or **OR** to create more complex rules. For example:

- **CHECK IF** customer accepts marketing **AND** order value is over `100` dollars
- **CHECK IF** customer accepts marketing **OR** order value is over `100` dollars

## Working with data

To effectively use conditions, you need to understand the data and fields available within your Shopify store. This data is accessed through the [Shopify GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql#graphql-admin-api), which provides a structured way to query and retrieve information about your store, customers, products, and more.

Conditions use data from your Shopify store. Flow supports different data types, like numbers, text, dates, and true/false values. You can use this data to create precise conditions. Conditions can use static data (fixed values) or dynamic data (values that change based on your store’s information).

Each condition requires you to select a specific field from the Admin API, such as `order.totalPrice` or `customer.tags`. You then choose a logical operator, such as `Equal to`, `Greater than` or `Contains` to compare the field’s value to the value you define in the condition.

## Logical operators

[Logical operators](https://help.shopify.com/manual/shopify-flow/reference/conditions#logical-operators) define how your condition is applied. They can check simple properties or more complex ones using lists. Shopify Flow’s logical operators can be organized into three categories: field-level operators, list operators, and null or empty operators. Let’s discover each of these categories.

### Field-level operators compare two values

#### Types of field-level operators

Use the table below to gain an understanding of all of the field operators you can use, what it checks or compares and an example of how to apply it when setting conditions in your workflows” the “of” is missing.

| Field-level operator                      | What it checks or compares                                                                                        |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Equal to                                  | Compares values to check whether they’re the same                                                                 |
| Not equal to                              | Compares values to check whether they are not the same                                                            |
| Greater than and Greater than or equal to | Checks whether the first value is greater than, or greater than or equal to, the second value                     |
| Less than and Less than or equal to       | Checks whether the first value is less than, or less than or equal to, the second value                           |
| Any of                                    | Checks whether the field is equal to any value in the provided list                                               |
| Not any of                                | Checks whether the field is not equal to any of the values in the provided list                                   |
| Includes                                  | Compares values to check whether any of the first value input includes the data in the second value input         |
| Does not include                          | Compares values to check whether any of the first value input does not include the data in the second value input |
| Starts with                               | Compares values to check whether the first value starts with the data in the second value                         |
| Does not start with                       | Compares values to check whether the first value does not start with the data in the second value                 |
| Ends with                                 | Compares values to check whether the first value ends with the data in the second value                           |
| Does not end with                         | Compares values to check whether the first value does not end with the data in the second value                   |

To explore a comprehensive list with specific examples of how these operators interact with data from your Shopify store, refer to [field-level operators](https://help.shopify.com/manual/shopify-flow/reference/conditions#field-operators) in the Shopify help center.

## Exploring field-level operators

Activity: Get experience with different field-level operators in Shopify Flow

1.  **Open a workflow:** Go to your Shopify Flow editor and either create a new workflow or open an existing one.
2.  **Add a condition:** In the workflow editor, add a new condition.
3.  **Experiment with operators:** In the condition settings, you’ll see a dropdown menu with various field-level operators. Choose different operators from the list and observe how they change the condition’s logic.
4.  **Test with sample data:** Use sample data or the **Log Output** action to test how each operator evaluates the data.
5.  **Analyze the results:** Observe how the different operators affect the outcome of the condition based on the data you provide.

### List operators

List operators allow you to define how many items in a list must meet a specific condition for the workflow to proceed. For instance, you can check if `at least one of`, `all of`, or `none of` the items in a list fulfill certain criteria.

#### Shopify Flow offers three list operators:

- `at least one of`: This operator checks if at least one item in the list meets the condition. It’s ideal for scenarios where you want to trigger an action if any item in a list fulfills your criteria. For example, you might want to send a notification if any product in an order has a specific tag.
- `all of`: This operator checks if all items in the list meet the condition. This is suitable for situations where you require every item in a list to fulfill specific criteria. For example, you might want to apply a discount only if all products in an order belong to a certain collection.
- `None of`: This operator checks if none of the items in the list satisfy the condition. It’s useful for scenarios where you want to ensure that no item in a list meets specific criteria. For example, you could use this to check if an order does not contain any products with a “pre-order” tag.

When using the `none of` operator, avoid the double-negative with `is not equal to`. This can lead to confusion and invalid conditions.

List operators can be combined with field-level operators to create specific conditions. For instance, you could use `at least one of` with the `contains` operator to check if any product title in an order contains the word `gift`

If you want to count how many items match a condition, you can use the [run code action](https://changelog.shopify.com/posts/shopify-flow-new-run-code-action), which is an advanced mode for conditions that we will learn about when you begin to build Shopify Flow workflows like a Pro.

By understanding and effectively utilizing list operators, you can create powerful and flexible workflows in Shopify Flow that cater to a wide range of automation requirements.

To explore a comprehensive list with specific examples of how these operators interact with data from your Shopify store, refer to [list operators](https://help.shopify.com/manual/shopify-flow/reference/conditions#list-operators) in the Shopify Help Center.

### Null or empty operators

Data often contains fields with missing or undefined values, referred to as “null” or “empty.” These operators are designed to specifically check the state of individual fields, not entire lists.

#### Types of null or empty operators

**“Empty” or “Does Not Exist”:**

- This operator returns `true` if the specified field is either `null` or empty.
- It returns `false` if the field contains any value.
- **Example:** Consider `order.cancelReason`. If an order hasn’t been canceled, this field will be `null`. Using “Empty” or “Does Not Exist” on `order.cancelReason` would return `true`.

**“Not Empty” or “Exists”:**

- This operator returns `true` if the specified field contains a value ( it is neither `null` or “not empty”).
- It returns `false` if the field is `null` or empty.
- **Example:** Using “Not Empty” or “Exists” on `order.cancelReason` would return `true` only when an order has been canceled and a reason is provided.

To explore a comprehensive list with specific examples of how these operators interact with data from your Shopify store, refer to null or empty operators in the Shopify Help Center.

## Ordering and combining conditions

You can combine multiple conditions within a workflow using `AND` or `OR` logic to create more complex rules. This allows you to define scenarios where multiple criteria must be met for the workflow to continue.

**Important:** When combining conditions, carefully consider whether you need `AND` or `OR` logic to achieve your desired outcome. This is a common area where errors can occur, so double-check your logic to ensure it’s accurate.

- `AND`: All conditions must be true
- `OR`: At least one condition must be true

#### Example: SVAL Gear’s free shipping on next order

SVAL Gear wants to offer free shipping to customers on their next purchase who place an order over `100` `AND` their shipping address country is equal to `United States`. They can use `AND` logic to ensure free shipping is only applied when both conditions are met.

- **Condition 1:** Order value is greater than $100
- **Condition 2:** Shipping country is United States

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400613%2F12.+C1+Free+shipping+on+your+next+purchase.1742400613784.png)

## Choosing the right conditions

Choosing the right conditions is crucial for ensuring your workflow executes as intended. Consider the following factors when choosing conditions:

- **Relevance**: Choose conditions that are directly relevant to your automation goal and the data you want to evaluate.
- **Accuracy**: Ensure the conditions accurately reflect the criteria you want to check. Use the correct logical operators and data fields to avoid unintended outcomes.
- **Combinations**: Consider combining multiple conditions to create more complex logic and handle various scenarios.

### Pro tips for choosing conditions

- **Test your conditions:** Just like you tested your triggers, it’s important to test your conditions to ensure they are working as expected. Use the Log Output action to see how your conditions evaluate with real data before your workflow goes live.
- **Choose the correct fields**: Make sure you select the correct data fields for your conditions. Using the wrong field can lead to unexpected results or errors. For example, if you want to check the tags of products in an order, use `order.lineItems.product.tags` , not `order.publication.products.tags` . The latter refers to all products in the publication, not just those in the order.

For a deep dive into conditions, check out [conditions in Shopify Flow.](https://help.shopify.com/manual/shopify-flow/reference/conditions)

## Top three takeaways: Conditions

1.  Conditions are the “if” in “if-then” statements, evaluating if a workflow should proceed based on specific criteria
2.  Logical operators use data from your store to define how your condition is applied
3.  Combining conditions with `AND` or `OR` logic enables complex workflows

Chapter 6

# Actions

# Actions

The steps that make changes to your store

Estimated 4 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Actions run on data](#actions-run-on-data)
- [Types of actions](#types-of-actions)
  - [Understanding action pages](#understanding-action-pages)
- [Choosing the right action](#choosing-the-right-action)
- [Top three takeaways: Actions](#top-three--takeaways-actions)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Actions run on data](#actions-run-on-data)
- [Types of actions](#types-of-actions)
  - [Understanding action pages](#understanding-action-pages)
- [Choosing the right action](#choosing-the-right-action)
- [Top three takeaways: Actions](#top-three--takeaways-actions)

Actions are the heart of automation in Shopify Flow. They’re the tasks that get executed, to make changes to your store, influence data within the workflow, or interact with external apps and services. For example, actions can add order tags, remove customer tags, or put fulfillment orders on hold. You can also use actions to send emails, Slack messages, or HTTP requests to external services. Actions are what bring your automation visions to life.

## Actions run on data

Actions need data to work correctly. When you’re editing a workflow, you might encounter errors that prevent you from saving the workflow. If you choose an action that doesn’t have the necessary data provided by the trigger or a `Get data` action, the workflow won’t run, and you’ll see an error message.

For example, imagine a workflow trigger that starts when a `Customer created` trigger, which imports customer data into the workflow. If this trigger is followed by an `Add products tags` action (which requires product data rather than customer data), the workflow will result in a ‘Product data not found’ error.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742400645%2F13.+C1-+L4+Actions+run+on+data%E2%80%93+Error+Example.1742400645667.png)

The Shopify Flow workflow editing interface automatically identifies what you need to “Review”. For this example, let’s see the details of and next steps of the error message you need to correct.

**Error message: Product data not found**  
This action requires a single \`Product\`, but the \`Product\` is not available from the trigger or other steps. To get the \`Product\` you can:

- Change the trigger to one that includes the Product
- Use the “For each” step to loop over a list of Product objects. [Learn more](https://help.shopify.com/manual/shopify-flow/create/troubleshoot#data-not-found)

## Types of actions

Shopify Flow offers over 80 actions for you to add to your workflow, each possessing a unique function and purpose:

#### Understanding action pages

The Shopify help center has an incredible manual that lists every action you can choose from – [actions in Shopify Flow](https://help.shopify.com/manual/shopify-flow/reference/actions).

Each action has its own manual with details to support your use of it. Each action manual’s documentation includes:

- **An overview:** A short summary of what the action does
- **Required fields:** Details on the input fields you need to provide, including the types of data and how to format it
- **Trigger:** Explains the trigger events that would usually cause the action to happen
- **Templates:** easy access to the Shopify Flow templates that use your selected action

By reviewing these action pages, you’ll learn how to set up actions with confidence to create effective workflows.

## Choosing the right action

Selecting the appropriate actions is key for achieving your automation goals. Consider the following factors when choosing actions:

- **Relevance**: Ensure the actions you choose are relevant to your automation goal and will produce the desired outcome.
- **Dependencies**: Consider any dependencies between actions. Some actions might need to be executed in a specific order or rely on the output of previous actions.
- **Efficiency**: Choose actions that are efficient and perform the desired tasks without unnecessary steps or complexity.

## Top three takeaways: Actions

- Actions are the core of a workflow goal, carrying out the tasks you define to optimize your business operations
- Actions can modify data, interact with apps, send communications, trigger webhooks, and control workflow execution
- Combining different actions allows you to create comprehensive workflows that automate complex processes

Chapter 7

# Webhooks

# Wrap up and next steps

Congratulations! You've completed The Anatomy of a Shopify Workflow and gained the knowledge to build powerful automations for your ecommerce store.

Estimated 2 min read

You now understand how triggers, conditions, and actions work together to create effective workflows, and how your store data and the GraphQLAdmin API fuel these automations.

Let’s break down the takeaways from each lesson.

**Shopify Flow core components:** You explored the fundamental building blocks of workflows: triggers (the events that start them), conditions (the logic that guides them), and actions (the tasks they perform). You also learned how Shopify Flow seamlessly uses the Shopify GraphQL Admin API throughout the workflow to modify data based on your workflows criteria.

**Getting started with Shopify Flow templates:** You got familiar with the Flow interface, including how to find templates and understand core automation elements.

**Triggers:** You gained an understanding of the different trigger types and how to choose the right one for your automation needs.

**Conditions:** You learned how to use conditions to control the flow of your workflows, ensuring they execute only when specific criteria are met.

**Actions:** You discovered the various action types and their applications, enabling you to automate a wide range of tasks and streamline your ecommerce operations.

By mastering core components of Shopify Flow workflows, you now have the tools and knowledge to automate key processes in your store, from order fulfillment and customer tagging to inventory management and marketing campaigns. Start building, tinkering, and unlocking your business’s efficiency with Shopify Flow.

# Framework for building a Shopify Flow workflow

The framework consists of four phases.

Estimated 2 min read

Building effective Shopify Flow workflows requires a structured approach, just like developing a custom app. This framework will guide you through the process, ensuring your automations are efficient, reliable, and aligned with your business goals.

| Phase                        | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| **1\. Plan**                 | Identify automation opportunities and define workflow goals                               |
| **2\. Design and configure** | Map the workflow’s core components to achieve planned objectives                          |
| **3\. Test**                 | Validate the workflow’s functionality through troubleshooting to verify expected behavior |
| **4\. Activate and monitor** | Launch workflow at scale and continuously track its performance                           |

Chapter 8

# Phase one: Plan

Identify automation opportunities and define workflow goals

Estimated 7 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Part one: Identify automation opportunities](#part-one-identify-automation-opportunities)
  - [1\. Identify key manual processes](#1-identify-key-manual-processes)
  - [2\. Categorize by business operation](#2-categorize-by-business-operation)
  - [3\. Explore automation opportunities](#3-explore-automation-opportunities)
  - [4\. Brainstorm automation opportunities](#4-brainstorm-automation-opportunities)
- [Part two: Define workflow goals](#part-two-define-workflow-goals)
  - [1\. Choose a manual process](#1-choose-a-manual-process)
  - [2\. Describe a specific instance](#2-describe-a-specific-instance)
  - [3\. Reflect on a high level](#3-reflect-on-a-high-level)
  - [4\. Dig deep into the current process](#4-dig-deep-into-the-current-process)
  - [5\. Define Your workflow goal](#5-define-your-workflow-goal)
- [Planning a workflow with SVAL Gear](#planning-a-workflow-with-sval-gear)
- [Part one: Identifying automation opportunities](#part-one-identifying-automation-opportunities)
- [Part two: Defining workflow goals](#part-two-defining-workflow-goals)
  - [1\. Choose a manual process:](#1-choose-a-manual-process-1)
  - [2\. Describe a specific instance:](#2-describe-a-specific-instance-1)
  - [3\. Reflect on a high level:](#3-reflect-on-a-high-level-1)
  - [4\. Dig deep into the current process:](#4-dig-deep-into-the-current-process-1)
  - [5\. Define your workflow goal:](#5-define-your-workflow-goal-1)
- [Top three takeaways: Plan](#top-three-takeaways-plan)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Part one: Identify automation opportunities](#part-one-identify-automation-opportunities)
  - [1\. Identify key manual processes](#1-identify-key-manual-processes)
  - [2\. Categorize by business operation](#2-categorize-by-business-operation)
  - [3\. Explore automation opportunities](#3-explore-automation-opportunities)
  - [4\. Brainstorm automation opportunities](#4-brainstorm-automation-opportunities)
- [Part two: Define workflow goals](#part-two-define-workflow-goals)
  - [1\. Choose a manual process](#1-choose-a-manual-process)
  - [2\. Describe a specific instance](#2-describe-a-specific-instance)
  - [3\. Reflect on a high level](#3-reflect-on-a-high-level)
  - [4\. Dig deep into the current process](#4-dig-deep-into-the-current-process)
  - [5\. Define Your workflow goal](#5-define-your-workflow-goal)
- [Planning a workflow with SVAL Gear](#planning-a-workflow-with-sval-gear)
- [Part one: Identifying automation opportunities](#part-one-identifying-automation-opportunities)
- [Part two: Defining workflow goals](#part-two-defining-workflow-goals)
  - [1\. Choose a manual process:](#1-choose-a-manual-process-1)
  - [2\. Describe a specific instance:](#2-describe-a-specific-instance-1)
  - [3\. Reflect on a high level:](#3-reflect-on-a-high-level-1)
  - [4\. Dig deep into the current process:](#4-dig-deep-into-the-current-process-1)
  - [5\. Define your workflow goal:](#5-define-your-workflow-goal-1)
- [Top three takeaways: Plan](#top-three-takeaways-plan)

Before diving into building workflows, it’s important to take a step back to identify your opportunities for automation and define your workflow’s goals.

To identify manual processes in your business operations, explore automation opportunities, and define clear and specific goals for your workflows.

## Part one: Identify automation opportunities

### 1\. Identify key manual processes

Identify the three most time-consuming manual processes that you or your team perform regularly at a high level.

**Example:** Notifying the team about high value orders

### 2\. Categorize by business operation

Categorize each of your top three processes within a relevant business operation category.

**Example:** Notifying the team about low stock would be categorized as “Inventory Control.”

### 3\. Explore automation opportunities

Expand the sections below to discover typical manual processes and related automation opportunities in Shopify Flow.

Customer segmentation and personalization

Typical manual process

Manually reviewing customer data (purchase history, spending habits, behavior) to identify customer segments and create targeted marketing campaigns or personalized offers.

Automation opportunity

Automating customer segmentation enables targeted marketing and personalized offers.

For example, you can automatically tag customers based on purchase history, spending habits, or storefront interactions to send tailored discounts or promotions.

Order management

Typical manual process

Manually tagging, routing, and updating order status.

Automation opportunity

Automating order management improves processing efficiency and reduces errors.For example, you can automate tasks like tagging orders based on specific criteria, sending notifications to fulfillment teams.

Inventory management

Typical manual process

Manually managing inventory levels, hiding out-of-stock products, and notifying the team of low-stock products.

Automation opportunity

Automating inventory management ensures accurate control and prevents overselling. For example, automation can help you automatically adjust inventory levels, hide out-of-stock products, and send low-stock alerts.

Customer communication

Typical manual process

Manually responding to customer inquiries, identifying high-value customers, and processing returns.

Automation opportunity

Automating customer communication enhances service and improves satisfaction. For example, when a customer has opted into your marketing email you personalize campaigns based on their buying behavior and streamline return processing.

Marketing automation

Typical manual process

Manually segmenting customers and sending marketing emails.

Automation opportunity

Automating marketing tasks enables targeted campaigns and saves time. For example, you can automate customer segmentation, personalized email sequences, abandoned cart reminders, and loyalty rewards.

### 4\. Brainstorm automation opportunities

- Select two of your top three manual processes.
- For each selected process, brainstorm potential automation opportunities using Shopify Flow.

## Part two: Define workflow goals

### 1\. Choose a manual process

Select **one** specific manual process from the **two** you chose in part one that you want to automate.

### 2\. Describe a specific instance

Identify a specific example or instance of this manual process impacting your business and tell the entire story.

### 3\. Reflect on a high level

Zoom out to consider: What problem or challenge are you trying to solve by automating this process?

**Example:** Reward VIP customers: Managing VIP customer rewards requires a lot of manual work. Our marketing and customer service teams spend too much time manually identifying VIP customers and running reward programs. This process is inefficient, can lead to errors, and takes time away from other important tasks.

### 4\. Dig deep into the current process

Let’s break down your current manual process:

- Describe the process, step-by-step.
- **When:** What event or situation initiates this manual process?
- **Check if:** What questions, choices or “if this, then that” decisions move the process forward?
- **Do this:** What actions are taken to complete the process?

### 5\. Define Your workflow goal

Based on your answers to these questions, you can now name and define a clear and specific goal for your workflow. The name of your goal should stem from a combination of your high level reflection.

- What problem or challenge are you trying to solve by automating this process?

The specific outcome your workflow’s goal should stem from digging deep into the current process:

- **Start when:** The event or situation initiates your manual process.
- **Check if:** The inquiries or choices, acting as “if this, then that” decisions, guide the process from one step to the next.
- **Do this:** The desired actions your workflow should take to complete the process.

## Planning a workflow with SVAL Gear

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480941%2F1.+C2-+SVAL+Gear+lift+line+png.1742480941131.png)

SVAL Gear identified a need to improve their order processing. Specifically, they manually review every order to identify those over $1,000, which require special handling to minimize shipping errors. This process is time-consuming and prone to mistakes, especially during peak season.

## Part one: Identifying automation opportunities

Let’s review SVAL Gears results of identifying automation opportunities.

| Activity tasks                           | SVAL Gear’s answers                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------- |
| 1\. Identify key manual processes:       | Reviewing orders to identify those over $1,000                                         |
| 2\. Categorize by business operation:    | Order management                                                                       |
| 3\. Explore automation opportunities:    | Tag orders based on defined criteria                                                   |
| 4\. Brainstorm automation opportunities: | Tagging orders over $1000 and sending an internal notification to the fulfillment team |

## Part two: Defining workflow goals

### 1\. Choose a manual process:

SVAL Gear chose the manual process of reviewing orders to identify those over $1,000, which require special handling to minimize shipping errors.

### 2\. Describe a specific instance:

During the holiday season, SVAL Gear experienced a surge in shipping errors for high-value orders. One specific instance involved a customer who ordered a $1,500 snowboard package that was damaged in transit due to incorrect packaging.

### 3\. Reflect on a high level:

What problem or challenge are you trying to solve by automating this process?

**Faster processing of high-value orders:** Reduce shipping errors for high-value orders, decrease the time spent on manual review, and improve the efficiency of our order fulfillment process.

### 4\. Dig deep into the current process:

Let’s review SVAL Gears results breaking down their current process:

| Current process prompts                                                                           | SVAL Gear’s answers                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Describe the process, step-by-step.                                                               | Every 48 hours a team member from the sales department reviews the order totals for each order in the Shopify admin. If the order total is greater than or equal to $1,000, they send an internal email with the order ID to the fulfillment team. |
| **Start when:** What event or situation initiates this manual process?                            | A new order is created in the online store.                                                                                                                                                                                                        |
| **Check if:** What questions, choices or “if this, then that” decisions move the process forward? | Is the order total greater than or equal to $1,000? If yes, proceed with flagging and notifying. If not, the order is processed normally.                                                                                                          |
| **Do this:** What actions are taken to complete the process?                                      | The order is flagged and the order ID is gathered The shipping department is sent an internal email with the order ID                                                                                                                              |

### 5\. Define your workflow goal:

Based on SVAL Gear’s analysis, the name and specific outcome of their workflow’s goal of SVAL Gear’s workflow goal became:

**Faster processing of high-value orders**

- **Start when:** A new order is created in the online store
- **Check if:** The value of the order is more than $1000
- **Do this:** Add a “High-Value” tag and send an internal email with the order ID to the shipping team

## Top three takeaways: Plan

- Planning requires reflection. Ask yourself questions to l surface the clarity you need to understand your current manual processes and guide your workflow design.
- Breaking down the manual steps involved in the process you want to automate to identify potential triggers, conditions, and actions for your workflow.
- By clearly defining your workflow goals, you’ll be able to plan more effective automations that deliver tangible results.

Chapter 9

# Phase two: Design and configure

Map the workflow’s core components to achieve planned objectives

Estimated 15 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Leveraging Shopify Flow templates](#leveraging-shopify-flow-templates)
  - [How to use Shopify Flow templates](#how-to-use-shopify-flow-templates)
  - [Benefits of using templates](#benefits-of-using-templates)
- [Selecting triggers](#selecting-triggers)
  - [Choosing the right trigger](#choosing-the-right-trigger)
- [Selecting data](#selecting-data)
  - [Choosing the right data:](#choosing-the-right-data)
  - [Understanding data: objects and variables](#understanding-data-objects-and-variables)
  - [Accessing and using data in workflows](#accessing-and-using-data-in-workflows)
  - [Paths and triggers](#paths-and-triggers)
  - [Data types](#data-types)
- [Selecting conditions](#selecting-conditions)
  - [Choosing the right conditions:](#choosing-the-right-conditions)
  - [Working with lists](#working-with-lists)
  - [Speak your conditions aloud](#speak-your-conditions-aloud)
- [Drafting actions](#drafting-actions)
  - [Choosing the right actions:](#choosing-the-right-actions)
  - [Design and configure: Examples combined](#design-and-configure-examples-combined)
- [Introduction to advanced actions](#introduction-to-advanced-actions)
  - [Using the Shopify GraphQL Admin API](#using-the-shopify-graphql-admin-api)
    - [Considerations for API connections](#considerations-for-api-connections)
- [Integrating with apps and services](#integrating-with-apps-and-services)
  - [App integration example– Shopify Collabs:](#app-integration-example-shopify-collabs)
  - [](#)
- [Activity: Design and configure your workflow](#activity-design-and-configure-your-workflow)
  - [1\. Choose a scenario](#1-choose-a-scenario)
  - [2\. Explore the template library](#2-explore-the-template-library)
  - [3\. Design your workflow](#3-design-your-workflow)
- [Top three takeaways: Design and configure](#top-three-takeaways-design-and-configure)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Leveraging Shopify Flow templates](#leveraging-shopify-flow-templates)
  - [How to use Shopify Flow templates](#how-to-use-shopify-flow-templates)
  - [Benefits of using templates](#benefits-of-using-templates)
- [Selecting triggers](#selecting-triggers)
  - [Choosing the right trigger](#choosing-the-right-trigger)
- [Selecting data](#selecting-data)
  - [Choosing the right data:](#choosing-the-right-data)
  - [Understanding data: objects and variables](#understanding-data-objects-and-variables)
  - [Accessing and using data in workflows](#accessing-and-using-data-in-workflows)
  - [Paths and triggers](#paths-and-triggers)
  - [Data types](#data-types)
- [Selecting conditions](#selecting-conditions)
  - [Choosing the right conditions:](#choosing-the-right-conditions)
  - [Working with lists](#working-with-lists)
  - [Speak your conditions aloud](#speak-your-conditions-aloud)
- [Drafting actions](#drafting-actions)
  - [Choosing the right actions:](#choosing-the-right-actions)
  - [Design and configure: Examples combined](#design-and-configure-examples-combined)
- [Introduction to advanced actions](#introduction-to-advanced-actions)
  - [Using the Shopify GraphQL Admin API](#using-the-shopify-graphql-admin-api)
    - [Considerations for API connections](#considerations-for-api-connections)
- [Integrating with apps and services](#integrating-with-apps-and-services)
  - [App integration example– Shopify Collabs:](#app-integration-example-shopify-collabs)
  - [](#)
- [Activity: Design and configure your workflow](#activity-design-and-configure-your-workflow)
  - [1\. Choose a scenario](#1-choose-a-scenario)
  - [2\. Explore the template library](#2-explore-the-template-library)
  - [3\. Design your workflow](#3-design-your-workflow)
- [Top three takeaways: Design and configure](#top-three-takeaways-design-and-configure)

In phase one, you brainstormed automation opportunities and defined our workflow goal. Now, in phase two we will use your goal to design and configure a workflow to set the stage to test your automation. Think of workflows as custom apps that run in your store. Flow takes the pain out of developing custom apps, making it easy to use events, get data, do actions, and run the process without managing servers.

To get the most out of Flow, think like a developer. When building apps, developers typically use a structured approach to ensure they are efficient, reliable, and goal-oriented.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480922%2F2.+C2-+Agile+Software+Development.1742480921700.png)

This same process can be applied to building effective Shopify Flow workflows.

To help you determine if the design of your workflow is possible, reflect on the following questions:

- When should the automation run? Is there a trigger in Flow that seems to match?
- Are there fields in the admin that show the data that I need?
- Are the actions I want available in Flow? If not in Flow, is the action supported in Shopify?
- Will my automation need to access a lot of data (e.g., all of your orders at once)?

After answering these questions, you will develop a better understanding of how to approach designing and configuring your workflow. Let’s explore how you can leverage pre-built templates to streamline the process.

## Leveraging Shopify Flow templates

Before you create a workflow, explore the [Shopify Flow template library](https://admin.shopify.com/apps/flow/web/editor/templates?sort=best_match). It’s full of pre-built workflows that can save you time and inspire your automations.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480900%2F3.+C2+-Flow+Templates.1742480899935.png)

### How to use Shopify Flow templates

1.  **Search by keywords:** Use keywords related to your automation goal, such as “customer tags”, “inventory alerts”, or “order notifications”.
2.  **Filter by category:** Explore templates by category, such as “Marketing”, “Orders”, or “Customer service”.
3.  **Review template details:** Once you find a template that looks promising, review its details to understand its trigger, conditions, and actions. The best way to review it is to click ‘install template’ and begin exploring the contents within the configuration panels that aren’t exposed in the template library preview.
4.  **Customize the template:** Templates are designed to be customized to fit your specific needs. You can adjust the conditions, add or remove actions, and modify the data used.

### Benefits of using templates

- **Save time:** Templates provide a starting point for your workflows, eliminating the need to build everything from scratch.
- **Learn from examples:** By reviewing templates, you can learn how different components of Flow are used in real-world scenarios.
- **Discover new possibilities:** Exploring the template library can spark ideas for automations you might not have considered before.
- **Reduce errors:** Templates are pre-built and tested, reducing the risk of errors in your workflows.

By leveraging the power of templates, you can accelerate your automation journey and unlock the full potential of Shopify Flow.

With a solid understanding of workflow design and the potential of templates, let’s dive deeper into the first key element of any workflow: selecting the right trigger.

## Selecting triggers

A trigger is the event that initiates your workflow. It’s the “start when” of your automation. The right trigger ensures your workflow runs at the precise moment it’s needed, maximizing efficiency and relevance.

### Choosing the right trigger

- **Consider your goal:** What event signifies the start of the process you want to automate? For example,If you want to send a personalized welcome email to new customers, you’d select the “Customer created” trigger.
- **Review available triggers:** Shopify Flow offers a wide range of triggers related to orders, customers, products, inventory, and more. Explore the [list of triggers](https://help.shopify.com/manual/shopify-flow/reference/triggers) to understand the specific events they represent.
- **Specificity matters**: Choose the most specific trigger possible. For instance, “Order paid” is more precise than “Order created” if you’re automating actions based on successful payments.

**Selecting triggers example:** If your workflow’s goal is to tag high-value customers, your trigger could initiate when an order is created by selecting the “Order created” trigger.

**Pro tip:** Flow also provides a “Scheduled time” trigger and many actions that can retrieve data from your store based on query filters. Using [Scheduled time and Get data](https://help.shopify.com/manual/shopify-flow/concepts/advanced-workflows) allows you to effectively build custom triggers or perform bulk actions on data in Shopify.

## Selecting data

Data refers to the information contained within Shopify’s objects (like orders, customers, products) that your workflow will use. Data enables your workflow to make decisions and perform actions based on relevant information.

### Choosing the right data:

**Identify relevant objects:** Based on your trigger, determine which Shopify objects contain the data you need. For example, the “Order created” trigger provides access to the order and customer objects.

**Pinpoint specific variables:** Within those objects, select the specific variables that are essential for your workflow. For example, `order.customer.email`, `order.totalPriceSet.shopMoney.amount` , or `product.title`.

**Understand object hierarchy:** Use paths (`object`.`variable`.`subvariable`) to access nested data.

### Understanding data: objects and variables

Think of your store’s data like a big library.

- `Objects` represent the resources you can access. (e.g., the customers, the orders, the products).
- `Variables` represent the specific properties of an object (e.g., customer name, order total, product price).

**Important note:** The names of these variables in Shopify Flow correspond to the properties used in the [Shopify GraphQL Admin API.](https://shopify.dev/docs/api/admin-graphql) This keeps things consistent and avoids confusion and makes it easier to reference resources.

### Accessing and using data in workflows

Shopify Flow uses data from your store to power its triggers, conditions, and actions. Flow provides access to this data, but you need to understand how to reference it correctly within your workflows.

Think of this data as being organized into objects, like `customer` or `order`. Each object has variables like `customer.email` or `order.totalPriceSet.shopMoney.amount`. To use a specific piece of data in your workflow, you need to reference it using the correct object and variable. This reference is also known as the “path” of a variable. You can define variables manually, but the variable picker UI also uses these paths to help you navigate the available options.

### Paths and triggers

You’ll be much happier with your Shopify Flow workflows if you get comfortable with how to access data. It’s not too tricky, but you do need to remember that the right “path” to a variable depends on your trigger.

**Paths and triggers example:**

If you’re using a “Customer created” trigger, you can easily grab the customer’s email with `customer.email` path.

If you’re using an “Order created” trigger, you have a couple of different options for working with email:

- To get the email for _that particular order_, use the `order.email` path.
- To get the email linked to their account details, use the `order.customer.email` path.
- These emails may not be the same because a customer might use one email for a particular purchase but have a different email linked to their overall account details.

By understanding how to reference data correctly, you can ensure your workflows use the right information to make accurate decisions and perform the desired actions.

### Data types

Shopify Flow understands different data types and provides the appropriate operators for each data type. It’s important to be aware of how data is structured, especially when working with lists.

Here are some common data types you’ll encounter:

- **Strings**: Pieces of text (e.g., a customer’s name, a product’s title).
- **Numbers:** Whole numbers or decimals (e.g., an order’s total price, the number of items in stock).
- **Booleans:** True/false values (e.g., whether a customer accepts marketing).
- **Lists:** Collections of data (e.g., a customer’s multiple addresses, the products in an order).

## Selecting conditions

A condition is a rule that determines whether a specific action should be executed. It’s a “check if” statement in your automation. Conditions add logic and flexibility to your workflow, allowing it to adapt to different scenarios.

**Selecting conditions example:** If you’re tagging high-value customers, your condition might be: Check if `order.totalPriceSet.shopMoney.amount` is `greater than or equal to` to `500`.

### Choosing the right conditions:

- **Define your criteria:** What specific criteria must be met for an action to occur?
- **Use logical operators:** Shopify Flow supports various operators like `equals`, `greater than`, `less than`, `contains`, and `does not contain`.
- **Combine conditions:** Use AND or OR logic to create complex conditions.

When you are deciding which conditions to set, it’s always helpful to have [conditions in Shopify Flow](https://help.shopify.com/manual/shopify-flow/reference/conditions) at the ready to ensure you are making the right selections.

### Working with lists

Shopify Flow provides the following list operators to help you create workflows that do different things based on lists of information:

| List operator       | Description                                             | Example                                                            |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| **At least one of** | Checks **if any item** in a list meets a condition.     | Does the order have any line items with products tagged “fragile”? |
| **None of**         | Checks **if no items** in the list meet a condition.    | Does the customer have no “VIP” tags?                              |
| **All of**          | Checks if **every item** in the list meets a condition. | Are all products in order from the collection, “Snowboards”?       |

List operators and empty lists: To avoid mistakes, it’s important to understand how list operators behave when evaluating an empty list (a list with no items).

- When a list is empty only the list operator is evaluated (not the part that might check the value of a variable). Both **At least one of** and **All of** evaluate as `false` for an empty list, while **None of** evaluates as `true`.
- When checking if something is not `true` for **any of** the list items, it’s best to use **None of**, as it will properly return `true` on the empty list.

When you’re deciding on which list operators to use to evaluate, use the [Example Conditions](https://help.shopify.com/manual/shopify-flow/reference/conditions#example-conditions) Help Center page.

### Speak your conditions aloud

When setting conditions in your workflow, try saying them out loud. For example, “If at least one line item in the order contains a product with the category ‘Bedding’. If any part of that sentence feels awkward or unclear, it’s a sign that:

- The condition might not be structured correctly.
- You might need to revisit the data you’re using.
- There’s a concept you need to clarify.

This “say it aloud” method helps you catch logical errors and ensures your conditions accurately reflect your intended criteria.

## Drafting actions

An action is the task your workflow makes when the workflow is triggered and the conditions are met. It’s the “Do This” part of your automation. Actions are the core purpose of your workflow, enabling you to automate tasks and improve efficiency.

**Heads up!** In the upcoming “Design and configure” phase, we’ll explore a safe way to test your actions using the Log output action. For now, focus on drafting your workflow’s actions, but don’t turn your workflow on until you are ready to start testing. We’ll dive deeper into using Log output to test your actions later on. Once your workflow is performing as expected, you can replace the Log output action with your actual actions.

### Choosing the right actions:

- **Align with your goal:** Select actions that directly address the problem you’re trying to solve.
- **Explore available actions:** Shopify Flow offers a variety of actions, including tagging customers, sending emails, updating order notes, and integrating with third-party apps.
- **Consider the sequence:** Actions are executed in the order they appear in your workflow.

**Drafting action example:** If you’re tagging high-value customers, your action might be `Add customer tag` “VIP”.

When you are deciding which actions you want your workflow to take, it’s always helpful to have [Actions In Shopify Flow](https://help.shopify.com/manual/shopify-flow/reference/actions) at the ready to ensure you are making the right selections.

### Design and configure: Examples combined

Let’s illustrate with a high-value customer example that was carried throughout the examples:

- **Trigger:** When `Order created`
- **Admin API data query:** `order.totalPriceSet.shopMoney.amount`
- **Condition:** Check if `order.totalPriceSet.shopMoney.amount` is `greater than or equal to` `500`
- **Action:** Do this `Add customer tag` “VIP”.

## Introduction to advanced actions

Since you are getting started with building workflows, you may not need advanced actions but let’s briefly touch on some that you might eventually need for complex workflows:

- [Loops (For Each)](https://help.shopify.com/en/manual/shopify-flow/reference/actions): Process multiple items in a list, one at a time (e.g., process each line item in an order).
- [Get Data:](https://help.shopify.com//manual/shopify-flow/concepts/advanced-workflows#actions) Retrieve a list of objects from Shopify.
- [Send Admin API Request:](https://help.shopify.com/manual/shopify-flow/reference/actions/send-admin-api-request) Interact directly with the Shopify Admin API to perform powerful actions.
- [Send HTTP Request:](https://help.shopify.com/manual/shopify-flow/reference/actions/send-http-request) Integrate with external services and APIs.
- [Run Code:](https://help.shopify.com/manual/shopify-flow/reference/actions/run-code) Execute custom code for complex logic or data manipulation.

### Using the Shopify GraphQL Admin API

For more advanced Shopify actions, you can use the many mutations available in the Shopify Admin API. For example, Flow does not provide a native action to update details about a product but the “Send Admin API request” action can make use of the `productUpdate` mutation to make any number of changes to products on your store.

#### Considerations for API connections

**Check for existing actions:** Before exploring Admin API mutations, see if Flow already offers an action. This is often the easiest way to make a change in your shop.

**App functionality:** Ensure the app’s actions within Flow meet your specific automation needs.

**API availability:** If the app doesn’t have direct Flow actions, check if it provides an API. If it does, you might be able to connect to it using Flow’s API connection features.

By understanding these integration options, you can expand the capabilities of your workflows and automate even more tasks within your Shopify store.

## Integrating with apps and services

Sometimes, your workflow needs to interact with other apps or services to achieve your automation goal. Shopify Flow is designed to integrate with many popular apps allowing you to automate processes across your tech stack. Lets review an example with one of Shopify’s apps [Shopify Collabs](https://apps.shopify.com/collabs).

### App integration example– Shopify Collabs:

Use Shopify Collabs to automate repetitive affiliate program tasks with ready-made Shopify Flow templates. After you install an app that [works with Shopify Flow,](https://apps.shopify.com/collections/connectors-for-shopify-flow) you will see its triggers and actions within your workflows.

Shopify Collabs **triggers** added to Shopify Flow:

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480860%2F4.+C2+-Integrating+with+apps+and+services-+Triggers.1742480860626.png)

Shopify Collabs **actions** added in Shopify Flow:

### ![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480845%2F5.+C2-Integrating+with+apps+and+services-+Actions.1742480845394.png)

Some apps offer Shopify Flow templates for you to install and modify in Flow. For example the Shopify Collabs app offers a pre-designed template for [approving new applicants based on their number of followers.](https://admin.shopify.com/apps/flow/editor/templates/1b37220b-5acb-44fc-97db-090739281537?sort=best_match&apps=2775569)

App integrations within Shopify Flow expand the platform’s capabilities by connecting it to other systems and automating data exchange and actions between them. This allows you to create workflows that reach beyond Shopify, streamlining operations across different platforms. To learn about all the Integrations that are available to enhance your automations, explore the [Shopify Flow app store](https://apps.shopify.com/collections/connectors-for-shopify-flow).

## Activity: Design and configure your workflow

**Objective:** To apply the concepts learned in phase two and design a Shopify Flow workflow that addresses a specific automation need.

### 1\. Choose a scenario

Select one of the following scenarios or come up with your own based on your business needs:

- **Scenario 1:** Automatically tag high-value customers who place orders over $500.
- **Scenario 2:** Send an internal email to a staff member when a specific product is ordered.
- **Scenario 3:** Send a daily email with all unfulfilled orders.

### 2\. Explore the template library

- Before designing your workflow from scratch, explore the Shopify Flow template library.
- See if any pre-built workflows can serve as a helpful starting point or provide inspiration.

### 3\. Design your workflow

Use the Shopify Flow editor to design and configure your workflow by identifying the following:

- **Trigger:** What event should start workflow?
- **Data accessed:** What data will the workflow need to access or modify, and how does that data relate to the trigger event (i.e., what is the variable path)?
- **Conditions:** What conditions should be met for the action to be executed?
- **Actions:** What actions should the workflow perform?
- **Integrations:** Do you need to integrate with any apps or services?

**Pro tips:**

- Use the questions posed at the start of phase two to guide your design and configuration process.
- Consider using a template as a starting point for your workflow.
- Focus on drafting your workflow’s actions, but don’t turn it on until you are ready to start testing

## Top three takeaways: Design and configure

- Explore the Shopify Flow template library to find pre-built workflows that can save time and inspire your own automations.
- Select the most specific trigger that initiates your workflow at the appropriate moment.
- Learn how to access and use data within your workflows, including objects, variables, data types, and list operators.

Chapter 10

# Phase three: Test

Validate the workflow’s functionality through troubleshooting to verify expected behavior

Estimated 9 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Testing strategies](#testing-strategies)
  - [Test data](#test-data)
  - [Staging environment](#staging-environment)
  - [Testing actions with a test tag](#testing-actions-with-a-test-tag)
    - [How to test actions with a test tag](#how-to-test-actions-with-a-test-tag)
  - [Example: Testing with a with a test tag with SVAL Gear](#example-testing-with-a-with-a-test-tag-with-sval-gear)
  - [Configuring the Log output action for safe testing](#configuring-the-log-output-action-for-safe-testing)
- [Activity: Testing with Log output](#activity-testing-with-log-output)
  - [Objective:](#objective)
  - [Instructions:](#instructions)
  - [1\. Install a Log output template](#1-install-a-log-output-template)
  - [2\. Modify the template’s configuration](#2-modify-the-templates-configuration)
  - [3\. Test and observe](#3-test-and-observe)
- [Monitoring a workflow’s performance](#monitoring-a-workflows-performance)
  - [Send internal email action](#send-internal-email-action)
  - [The recent runs table](#the-recent-runs-table)
  - [Investigating individual runs](#investigating-individual-runs)
  - [Embracing iterative testing](#embracing-iterative-testing)
- [Top three takeaways: Test](#top-three-takeaways-test)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Testing strategies](#testing-strategies)
  - [Test data](#test-data)
  - [Staging environment](#staging-environment)
  - [Testing actions with a test tag](#testing-actions-with-a-test-tag)
    - [How to test actions with a test tag](#how-to-test-actions-with-a-test-tag)
  - [Example: Testing with a with a test tag with SVAL Gear](#example-testing-with-a-with-a-test-tag-with-sval-gear)
  - [Configuring the Log output action for safe testing](#configuring-the-log-output-action-for-safe-testing)
- [Activity: Testing with Log output](#activity-testing-with-log-output)
  - [Objective:](#objective)
  - [Instructions:](#instructions)
  - [1\. Install a Log output template](#1-install-a-log-output-template)
  - [2\. Modify the template’s configuration](#2-modify-the-templates-configuration)
  - [3\. Test and observe](#3-test-and-observe)
- [Monitoring a workflow’s performance](#monitoring-a-workflows-performance)
  - [Send internal email action](#send-internal-email-action)
  - [The recent runs table](#the-recent-runs-table)
  - [Investigating individual runs](#investigating-individual-runs)
  - [Embracing iterative testing](#embracing-iterative-testing)
- [Top three takeaways: Test](#top-three-takeaways-test)

Thorough testing is key to ensuring your workflows are functioning correctly and won’t cause unintended consequences in your store. In this lesson, we’ll explore various testing strategies, and learn how to use Shopify Flow’s logs to refine your automations.

## Testing strategies

Before activating your workflow, it’s important to test it in a safe environment. Here are some strategies to consider:

### Test data

Use sample or dummy data to test your workflow without affecting real orders or customers. This allows you to experiment with different scenarios and verify the logic of your workflow without any risk. For example, you can check if a “test” tag is present on an order or product before proceeding with other logic. This ensures that the workflow only runs on test objects and not live ones created through your store’s operations.

### Staging environment

If possible, create a separate “staging” version of your store to test your workflows in a safe environment. This provides a realistic testing ground without impacting your live store data.

### Testing actions with a test tag

Before setting your workflow live, you can test your actions to ensure they are working as expected. A great way to do this is to perform the actions on a “test” resource, like a fake order or product. You can include a condition in the workflow to prevent it from running on other resources.

#### How to test actions with a test tag

1.  Modify or create a new workflow
2.  Add a condition to check for a “test” tag
3.  From the Shopify Admin, add the \`test\` tag on a fake order or product you want to test against
4.  Review the workflow run logs to see the results of your actions without affecting live data

### Example: Testing with a with a test tag with SVAL Gear

In this example, SVAL Gear modified their ‘add a product tag’ named “out-of-stock” action by replicating and replacing the action with a test tag.

The workflow starts when an order is created, then iterates through each line item on the order using a “For each” loop to evaluate whether the total inventory is less than zero and tagging any out-of-stock product with “test”.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480824%2F6.+C2-Test+tag+Example+workflow.1742480824837.png)

The workflow run log details each step of your workflow, including when it started, the conditions it checked, and the actions it performed.

The Run status and Results section, located at the top of the workflow run log, displays the Run status as “completed” and organizes the test Results by date and time.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480785%2F7.+C2-+Test+Tag-+Run+status+and+Results.1742480785641.png)

The **Started when** section indicates the trigger that started the workflow, followed by the input and output log data

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480753%2F8.+C2+-Started+when.1742480753319.png)

The **Checked if** sections indicate the conditions that were checked **for each line item** in the order ![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480707%2F9.+C2-+Test+Tag+%22checked+if%22+Log+data.1742480707820.png)

The **Did this** section indicates the actions that were taken by the workflow

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480688%2F10.+C2-+Test+tag+%22+Did+this%22+Log+Data+png.1742480688851.png)

In this case, the “test” tag was successfully added to the product giving them confidence before allowing the workflow to impact the entire store. With this confidence SVAL gear can replace the \`Add a product tag\` action from “test” to “out-of-stock.”

This example shares the value of testing and monitoring the workflow run logs to troubleshoot, monitor, and optimize your automated workflows.

### Configuring the Log output action for safe testing

When building a workflow, it’s a good practice to begin by only doing non-destructive actions, which allow you to test and make mistakes without causing issues in your shop. One way to do this is to use the [Log output action](https://help.shopify.com/manual/shopify-flow/reference/actions/log-output). The Log output action writes a text output to the workflow run log in the “Run details” section of the [Run history page](https://help.shopify.com/manual/shopify-flow/manage/monitor#workflow-run). This can be helpful in debugging workflows by viewing data in the environment or viewing the result of Liquid expressions for a workflow run.

This action is a powerful tool for testing your workflow logic without making any live changes to your store. It allows you to “see” what’s happening within the workflow and verify that data is being processed correctly.

Flow’s run logs provide a detailed record of each workflow’s execution. It shows you:

- **What happened:** Every step, decision, result, and piece of data used
- **When it happened:** Timestamps for each action
- **If there were errors:** Allowing you to pinpoint problems

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480674%2F11.+C2-+L3-+Test+Log+Output.1742480674713.png)

In this [workflow template](https://admin.shopify.com/store/apps/flow/editor/templates/5786d4c7-8b78-4393-a330-6e703ad9fc19), the Log output action will check product metafields on line items in an order and push a list of all the line items and the value for the defined metafield into the run log.

**To add a Log output action to your workflow:**

- In the Shopify Flow editor, click the **”**+**”** icon to add a new action
- Select Log output from the list of actions
- In the output field, enter the data you want to log
  - You can **“add a variable”** for the Admin API to evaluate, or add any other information you want to track

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480618%2F12.+C2+log+output.1742480618135.png)

**Benefits of mock testing with log output**

- **Test logic:** Verify that your workflow’s logic is sound before making any actual changes to your real shop data
- **Debug errors:** Identify and resolve errors early in the process
- **Understand data:** Gain a better understanding of the data being processed by your workflow

## Activity: Testing with Log output

### Objective:

Gain practical experience with Shopify Flow conditions and using the “Log output” action for testing and debugging.

### Instructions:

### 1\. Install a Log output template

Begin by installing a new workflow template from the Shopify Flow template library that utilizes the “Log output” action. These templates will provide a pre-built foundation for your exploration.

- [Check product metafield values on an order](https://shopify.com/admin/apps/flow/editor/templates/5786d4c7-8b78-4393-a330-6e703ad9fc19)
- [Convert a customer metafield into tags for all customers](https://shopify.com/admin/apps/flow/editor/templates/180b8398-0577-4bdb-a59b-29b0c88e047f)

### 2\. Modify the template’s configuration

Adapt the template’s condition to perform the following checks. For each modification, ensure that the only action connected to the condition is **Log output**.

- **Check product metafield values on an order:**
  - Modify the condition to evaluate a product metafield within an order
- **Convert a customer metafield into tags for all customers:**
  - Change the condition (and potentially the trigger) to assess a customer metafield

### 3\. Test and observe

- Turn the workflow on
- Trigger the workflow by performing the action that initiates it (e.g., creating an order, creating a customer)
- Use the workflow run logs to observe the results of each condition and action check
- Use the run logs as a reference to prepare for “Phase four: Activate and monitor”

## Monitoring a workflow’s performance

After your test workflow is turned on with the Log output action, it’s essential to monitor its performance to ensure it’s running smoothly and achieving your desired outcomes. Shopify Flow provides tools like the send internal email action and the recent runs table and to help you investigate individual runs and embracing iterative testing.

### Send internal email action

The [Send internal email action](https://help.shopify.com/manual/shopify-flow/reference/actions/send-email) allows you to send emails from [flow@shopify.com](mailto:flow@shopify.com) to your store users or staff members within any workflow. You can install pre-built [error monitoring templates](https://admin.shopify.com/apps/flow/editor/templates/bfaf0a58-0719-4798-a6cb-45646e62bfa9?sort=best_match&apps=FLOW%2CSHOPIFY&tags=error_monitoring) to receive prompt alerts and address issues quickly.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480593%2F13.+C2+Send+internal+Error+email+action.1742480592923.png)

### The recent runs table

The [Recent runs](https://help.shopify.com/en/manual/shopify-flow/manage/monitor#recent-runs) table in Shopify Flow gives you the inside scoop on how your automated workflows perform. It provides a quick overview of each run, giving you insight to everything happening in your workflow runs in one place. Let’s navigate the columns of the recent runs table:

- **Workflow:** The name of the workflow that ran
- **Start time:** The time the workflow ran
- **Workflow status:** Indicates if the workflow is “Running,” “Waiting,” or “Completed.”
- **Results:** Includes a list of actions that were successfully completed and a list of actions that had errors. Clicking an action takes you to the relevant section on the run details page
- **Retries:** Will show if it was attempted again, with links to those retry attempts.
- **Started by:** Explains how the workflow started, whether it was a “Manual Retry,” a “Manual Trigger” initiated by you, or an automatic “Trigger Event” from Shopify.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480523%2F14.+C2+Recent+Runs+Table.1742480523751.png)

### Investigating individual runs

Click on a specific run in the recent runs table to view detailed information about its execution, including the trigger event, conditions evaluated, and actions performed.

Regularly reviewing this table allows you to monitor your automations, identify and fix problems, and ensure they’re running smoothly.

### Embracing iterative testing

In some cases, a workflow run can encounter an error or not run as intended. Remember that workflow building is an iterative process. If your workflow doesn’t function as expected, you can quickly: Observe the results in the workflow run logs and make edits to your workflow.

After troubleshooting and fixing the issues in the related workflow, past runs you can manually [Retry your workflow run](https://help.shopify.com/en/manual/shopify-flow/manage/manual-retry) to retroactively fix the result of past runs. Shopify Flow will use the data from the original trigger event but will execute the new logic from your changes. This allows for a rapid loop of change, test, and observation until you achieve the desired outcome.

## Top three takeaways: Test

- Thoroughly test workflow logic and troubleshoot errors safely using the Log output action to validate workflow behavior without impacting your live store.
- Leverage Shopify Flow’s run logs to monitor workflow performance, identify errors, and gain insights for troubleshooting, optimization, and ensuring intended automation.
- Recognize that workflow building is iterative. Use the ability to edit, rerun, and observe results in the Run logs to refine workflows until the desired outcome is achieved through this cycle of change, test, and observation.

Chapter 11

# Phase four: Activate and improve

Launch workflows at scale and continuously track performance.

Estimated 6 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Configuring your desired actions](#configuring-your-desired-actions)
- [Activating your workflow](#activating-your-workflow)
  - [How to activate your workflow:](#how-to-activate-your-workflow)
- [Searching for flows](#searching-for-flows)
  - [About searching](#about-searching)
  - [Searching from admin](#searching-from-admin)
  - [Search from Flow](#search-from-flow)
- [Troubleshooting errors in Shopify Flow](#troubleshooting-errors-in-shopify-flow)
  - [Debugging tools](#debugging-tools)
    - [Accessing workflow logs](#accessing-workflow-logs)
    - [Temporarily disable parts of the workflow](#temporarily-disable-parts-of-the-workflow)
  - [Common errors and troubleshooting steps](#common-errors-and-troubleshooting-steps)
- [Making adjustments](#making-adjustments)
- [Top three takeaways: Activate and monitor](#top-three-takeaways-activate-and-monitor)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Configuring your desired actions](#configuring-your-desired-actions)
- [Activating your workflow](#activating-your-workflow)
  - [How to activate your workflow:](#how-to-activate-your-workflow)
- [Searching for flows](#searching-for-flows)
  - [About searching](#about-searching)
  - [Searching from admin](#searching-from-admin)
  - [Search from Flow](#search-from-flow)
- [Troubleshooting errors in Shopify Flow](#troubleshooting-errors-in-shopify-flow)
  - [Debugging tools](#debugging-tools)
    - [Accessing workflow logs](#accessing-workflow-logs)
    - [Temporarily disable parts of the workflow](#temporarily-disable-parts-of-the-workflow)
  - [Common errors and troubleshooting steps](#common-errors-and-troubleshooting-steps)
- [Making adjustments](#making-adjustments)
- [Top three takeaways: Activate and monitor](#top-three-takeaways-activate-and-monitor)

You’ve built and tested your workflow, and now it’s time to unleash its automation power! In this lesson, we’ll guide you through the process of publishing your workflow, monitoring its performance, and making adjustments as needed.

## Configuring your desired actions

Once you’re confident in your workflows logic, you can replace the Log output action with your drafted actions needed to achieve your automation goal. Remember to configure the parameters of each action to ensure it performs the desired task.

## Activating your workflow

“Turn on workflow” activates the workflow when there is a trigger event, evaluates the conditions, and sets it live in your store. Once published, the workflow will automatically run based on its trigger.

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480505%2F15.+C2+Ready+to+turn+on+your+automation+workflow-.1742480505553.png)

### How to activate your workflow:

1.  Open your workflow in the Shopify Flow editor
2.  Review the workflows triggers, conditions, and actions to ensure everything is configured correctly
3.  Click the **Turn on workflow** button in the top right corner of the editor or Apply changes if the workflow is already active for testing purposes
4.  Confirm that you want to activate the workflow– Click **Turn on**

Once active, the workflow will start running automatically whenever a trigger event occurs.

## Searching for flows

Whether you’re looking to streamline your operations or optimize workflows, workflow searches improves visibility into how workflows interact with various aspects of your business and makes investigating easier by identifying workflow runs related to specific resources. You can search Flow’s impact to your Shopify store from the Admin, using the \`More Actions\` drop down on a specific object, or search within Flow.

### About searching

After choosing to search, Flow will attempt to find workflow runs that have the text or ID in the step data. Flow won’t find a run if: The run’s step data doesn’t contain the ID or text or the run was purged from the system because it was older than 14 days. The step data can be viewed from any run by opening the run and clicking Step data on a step.

### Searching from admin

For resources that have a **More actions menu**, you can initiate a workflow run search by choosing the **Search Flow runs** option. This option is available for: orders, draft orders, customers, products, variants and collections.

To Search Flow runs from the Admin:

1.  Open the resource that you want to search for (such as an order)
2.  Click **More actions**
3.  Click **Search Flow runs**

![](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F9qcrjypi5f13ll6hohhdpck5c%2Fpublic%2F1742480374%2F16.Find+workflow+runs+starting+from+Admin+%E2%80%9CMore+actions%E2%80%9D+menus.1742480374092.png)

### Search from Flow

In the Flow app, you can search for any data that was included in the **step data** sections in a workflow run. When searching, be sure to omit any punctuation. For example, to search for an order ID, search 43843493 instead of gid://shopify/Order/43843493.

To search from a workflow run list:

1.  Click **Add filter**
2.  Choose **Includes text**
3.  Enter the `text` or `ID` that you want to search for

**Pro tip:** IDs for orders, products, and other resources can be found in the URL if you view that resource in the Admin. For example, if your url is:

`admin.shopify.com/store/you-store-name/orders/9790885625878`

`9790885625878` is the order ID.

## Troubleshooting errors in Shopify Flow

Don’t worry if you encounter errors in your workflows. It happens to the best of us! Shopify Flow provides debugging tools and common troubleshooting resources to help you identify the issue so you can begin to resolve them quickly.

### Debugging tools

#### Accessing workflow logs

1.  Go to the Flow editor
2.  Click the “View runs” button
3.  This will open the “Recent runs” table, where you can see a detailed record of each workflow run, including any errors

To analyze the logs, look for error messages or exceptions in the logs. These messages often provide clues about what went wrong. You can also examine the data being processed at each step to identify any inconsistencies.

#### Temporarily disable parts of the workflow

If you suspect a specific condition or action is causing the error, try temporarily disabling it to see if the workflow runs without errors. This helps isolate the source of the problem.

### Common errors and troubleshooting steps

| `Error Type` Description                                                         | Troubleshooting steps:                                                                                                                                                                                   |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Incorrect Trigger`: Workflow is not triggered by the intended event             | Go to the workflow’s trigger Double-check the trigger event and ensure it’s relevant and meets the data requirements of your conditions and actions If necessary, adjust the trigger                     |
| `Faulty Conditions`: The conditions aren’t evaluating correctly                  | Review conditions in the workflow Review the logic, operators, and data fields to ensure they’re accurate Review the step data in the run logs to confirm the condition is evaluating as expected        |
| `Data Mismatches`: The workflow is expecting different data than what’s provided | Review the step data in the run logs to see the actual data being processed Compare this data to what the workflow is expecting Adjust the workflow’s conditions or actions to handle the data correctly |

By actively using these troubleshooting tools and techniques, you can quickly identify and resolve errors in your workflows, ensuring they run smoothly and achieve your automation goals! To dig deeper into [troubleshooting workflow runs](https://help.shopify.com/manual/shopify-flow/manage/monitor#troubleshooting) visit the Shopify Help Center.

## Making adjustments

As your business needs evolve, you may need to adjust your workflows. Shopify Flow lets you edit and update your workflows anytime. To edit a published workflow, simply open it in the Shopify Flow editor, make the necessary changes, and then apply changes. To maximize the value of Shopify Flow and gain confidence when building workflow’s, you must embrace an iterative testing process.

## Top three takeaways: Activate and monitor

- Publish your workflows with your desired actions and monitor their performance using the **Recent Runs** table to ensure they’re working as expected.
- Use debugging tools and logs to troubleshoot errors and maintain efficient workflows.
- To maximize the value of Shopify Flow and gain confidence when building workflow’s, you must embrace an iterative testing process.

Chapter 12

# Wrap up and Next Steps

Congrats on completing the “Building a Workflow with Shopify Flow” course.

Estimated 2 min read

On this page astro-island,astro-slot,astro-static-slot{display:contents}(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();;(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i\[o\]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t)},o=t=>{let\[l,e\]=t;return l in i?i\[l\](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map((\[l,e\])=>\[l,o(e)\]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island\[ssr\]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template\[data-astro-template\]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("data-astro-template")||"default"\]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n\[r.getAttribute("name")||"default"\]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=\` (export ${v})\`),console.error(\`\[hydrate\] Error parsing props for component ${s}\`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT\_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro\[c\]===void 0){window.addEventListener(\`astro:${c}\`,()=>this.start(),{once:!0});return}try{await Astro\[c\](async()=>{let n=this.getAttribute("renderer-url"),\[h,{default:p}\]=await Promise.all(\[import(this.getAttribute("component-url")),n?import(n):()=>()=>{}\]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h\[u\];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component\[f\]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(\`\[astro-island\] Error hydrating ${this.getAttribute("component-url")}\`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",\["props"\]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- [Here’s what to remember from each phase:](#heres-what-to-remember-from-each-phase)
  - [Phase 1: Plan](#phase-1-plan)
  - [Phase 2: Design and configure](#phase-2-design-and-configure)
  - [Phase 3: Test](#phase-3-test)
  - [Phase 4: Activate and improve](#phase-4-activate-and-improve)

\[data-radix-scroll-area-viewport\]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}\[data-radix-scroll-area-viewport\]::-webkit-scrollbar{display:none}

- ## On this page
- [Here’s what to remember from each phase:](#heres-what-to-remember-from-each-phase)
  - [Phase 1: Plan](#phase-1-plan)
  - [Phase 2: Design and configure](#phase-2-design-and-configure)
  - [Phase 3: Test](#phase-3-test)
  - [Phase 4: Activate and improve](#phase-4-activate-and-improve)

You’ve now learned a powerful framework for automating your ecommerce business processes. You can use the framework to progress from planning to improving your workflows.

## Here’s what to remember from each phase:

### Phase 1: Plan

- Planning automation requires reflection. Ask yourself questions to break down your manual process to identify potential triggers, conditions, and actions before you start designing your workflow.
- By clearly defining your workflow goals, you’ll be able to plan more effective automations that deliver tangible results.

### Phase 2: Design and configure

- Explore the Shopify Flow template library to find pre-built workflows that can save time and inspire your own automations.
- Investigate the requirements of triggers, data, conditions, and actions to transform your automation goal into a workflow.

### Phase 3: Test

- Thoroughly test workflow logic and troubleshoot errors safely using the Log output action to validate workflow behavior without impacting your live store.
- Leverage Shopify Flow’s Run logs and Recent runs table to monitor workflow performance, identify errors, and gain insights for troubleshooting, optimization, and ensuring your workflow is achieving your desired outcomes.

### Phase 4: Activate and improve

- Continuously monitor your active workflows and be prepared to iterate and improve them as your business grows.
- To maximize the value of Shopify Flow and gain confidence when building workflow’s, you must embrace an iterative testing process.

By using the phases of the Shopify Flow framework, you can automate your operations, improve efficiency, and grow your business.
