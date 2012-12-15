Mass multiplayer online game of Pong
====

This document describes the roadmap, goals and design consideration of a multiplayer Pong game written in JavaScript.  

Goal
----

This is a purely academic activity with intentions to catch up in the areas of:
- cloud computing, 
- clientside mv* frameworks,
- game development (networking, physics, graphics), 
- Behavior Driven Development
- UML design 

and many more.   

I am also looking forward to meeting the performance requirements: how many players a large Amazon EC2 instance will handle while maintaining enjoyable latency.  
That should be fun to try Node's profiler tools, write benchmark tests and do optimizations.


Architecture
----

### Big picture

In essence the game is a client-server application written in JavaScript and deployed to cloud PaaS or IaaS.  
[Node.JS](http://www.nodejs.org) is my platform of choice that provides a lot of flexibility, very strong community of enthusiasts, amazing performance and is extremely lightweight.

- For the time being I chose [heroku](http://www.heroku.com) as a platform because it integrates with [Node](http://www.nodejs.org) and [git](http://www.github.com) seemlessly.
- As a communication layer between client and server I chose [socket.io](http://www.socket.io)
- For graphics rendering I chose [CAAT](https://github.com/hyperandroid/CAAT) which can render HTML5 graphics using canvas, webGL or CSS3
- For physics simulation I chose [box2d](http://box2d.org/), the JavaScript port of it may be a performance bottleneck we will do tests
- To spare myself from user management and authentication hassle I decided to integrate with Social Networks like Facebook and Twitter using [placeholder](still choosing tool)
- And for the actual web page that will host the game I chose [Backbone](http://www.backbonejs.org) MVC framework and [Twitter Bootstrap](http://twitter.github.com/bootstrap/) for layout

The following picture describes the overall architecture.

![Architecutre](https://raw.github.com/bestander/pong-mmo-www/master/documentation/pong-all-components.png)

## Package management

Node.JS has it's own systems for sources and packages management.  
As for the client side, there is no consensus.  
Some use [AMD](http://www.requirejs.org), othere use [bower](https://github.com/twitter/bower), most people use good old script tags.  

But for my projects I decided to use [component](https://github.com/component/component/).  
[![web component logo](https://component.jit.su/component-badge.svg)](https://github.com/component/component)  

Unlike many others, this tool has a solid scope and common sense behind it, check out the creator's [article](https://github.com/component/component/wiki/F.A.Q).  


### Client design


### Server design

