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

- For the time being I chose [heroku](http://www.heroku.com) as a hositng platform because it integrates with [Node](http://www.nodejs.org) and [git](http://www.github.com) seemlessly.
- As a communication layer between client and server I chose [socket.io](http://www.socket.io)
- For graphics rendering I chose [CAAT](https://github.com/hyperandroid/CAAT) which can render HTML5 graphics using canvas, webGL or CSS3
- For physics simulation I chose [box2d](http://box2d.org/), the JavaScript port of it may be a performance bottleneck we will do tests
- To spare myself from user management and authentication hassle I decided to integrate with Social Networks like Facebook and Twitter using [placeholder](still choosing tool)
- And for the actual web page that will host the game I chose [Backbone](http://www.backbonejs.org) MVC framework and [Twitter Bootstrap](http://twitter.github.com/bootstrap/) for layout

The design built around ability to make a real time network game and those articles were a great help:
- [Very good tutorial with must-read articles in references](http://buildnewgames.com/real-time-multiplayer)
- [A very simple explanation of network communications by Valve](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking)


The following picture describes the overall architecture.  

![Architecutre](https://raw.github.com/bestander/pong-mmo-www/master/documentation/pong-all-components.png)

### Modules

The game is split into many modules to keep things cohesive, small and testable.

- [pong-mmo-www](https://github.com/bestander/pong-mmo-www) binds everything together, hosts the website and serves assets
- [pong-mmo-server](https://github.com/bestander/pong-mmo-server) hosts pong-box2d module and synchronizes game state with the client over socket.io protocol stack
- [pong-mmo-client](https://github.com/bestander/pong-mmo-client) contains rendering and network logic, exchanges commands with pong-mmo-server
- [pong-box2d](https://github.com/bestander/pong-box2d) pong game implementation using box2dweb-commonjs mod]e, responsible only for ball and paddle game logic
- [box2dweb-commonjs](https://github.com/bestander/box2dweb-commonjs) a fork of the amazing box2d physics engine port from Actionscript which was ported from C++, supports both client and server environment
- [CAAT](https://github.com/bestander/CAAT) Canvas Advanced Animation Kit, a fork of a great HTML5 renderer that supports [component](https://github.com/component/component/)

#### Package management

Node.JS has it's own systems for sources and packages management.  
As for the client side, there is no consensus.  
Some use [AMD](http://www.requirejs.org) and [volo](http://volojs.org), othere use [bower](https://github.com/twitter/bower), most people use good old script tags.  

But for my projects I decided to use [component](https://github.com/component/component/).    
[![web component logo](https://component.jit.su/component-badge.svg)](https://github.com/component/component)

Unlike many others, this tool has a solid scope and common sense behind it, check out the creator's [article](https://github.com/component/component/wiki/F.A.Q).  

### Delivering world state updates from server to client sequence diagram

![Update from server to client](https://raw.github.com/bestander/pong-mmo-www/master/documentation/world-update-sequence.png)

### Sequence diagram for players joining and game starting

![server sequence diagram](https://raw.github.com/bestander/pong-mmo-www/master/documentation/players-connect-sequence.png)


### Client class diagram

![client classes diagram](https://raw.github.com/bestander/pong-mmo-www/master/documentation/client-classes.png)

### Server class diagram

![server classes diagram](https://raw.github.com/bestander/pong-mmo-www/master/documentation/server-classes.png)


Usage
----


### Compilation

The compiled and minified client sides scripts are stored in git repository.  
If you need a development version for debugging or you want to make changes to the client side use **Makefile** in **www** folder of this project.  

### Deployment

See [heroku Node.JS instructions](https://devcenter.heroku.com/articles/nodejs) on how to deploy your own web site with a Pong MMO game.  
All you need is fork the repository and push to heroku upstream.


License
----

Copyright 2012 Konstantin Raev (bestander@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
