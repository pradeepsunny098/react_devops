// My First React Server Project!
// This version works without JSX transpilation

import React from 'react';
import { renderToString } from 'react-dom/server';
import http from 'http';

// React Server Component (without JSX)
function MyFirstProject() {
  const myName = 'Pradeep Kumar';
  const favorites = ['Coding', 'Learning', 'Building Projects', 'Coffee'];
  
  const num1 = 10;
  const num2 = 5;

  return React.createElement('html', null,
    React.createElement('head', null,
      React.createElement('title', null, 'My First Project'),
      React.createElement('style', null, `
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          font-size: 2.5em;
          margin-bottom: 30px;
        }
        .section {
          margin: 25px 0;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .math {
          font-family: monospace;
          font-size: 1.1em;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          padding: 10px;
          margin: 5px 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 1.2em;
        }
      `)
    ),
    React.createElement('body', null,
      React.createElement('div', { className: 'container' },
        React.createElement('h1', null, 'Welcome to My First Project!'),
        
        React.createElement('div', { className: 'section' },
          React.createElement('h2', null, 'About Me'),
          React.createElement('p', null, 
            'Hello! My name is ',
            React.createElement('strong', null, myName)
          ),
          React.createElement('p', null, 'This is my first React Server project using React Server Components!')
        ),

        React.createElement('div', { className: 'section' },
          React.createElement('h2', null, 'Simple Math'),
          React.createElement('div', { className: 'math' },
            React.createElement('p', null, `${num1} + ${num2} = ${num1 + num2}`),
            React.createElement('p', null, `${num1} - ${num2} = ${num1 - num2}`),
            React.createElement('p', null, `${num1} x ${num2} = ${num1 * num2}`),
            React.createElement('p', null, `${num1} ÷ ${num2} = ${num1 / num2}`)
          )
        ),

        React.createElement('div', { className: 'section' },
          React.createElement('h2', null, 'My Favorite Things'),
          React.createElement('ul', null,
            ...favorites.map((item, index) =>
              React.createElement('li', { key: index }, `${index + 1}. ${item}`)
            )
          )
        ),

        React.createElement('div', { className: 'footer' },
          React.createElement('p', null, 'This is just the beginning of my coding journey!')
        )
      )
    )
  );
}

// Create HTTP server
const server = http.createServer((req, res) => {
  const html = renderToString(React.createElement(MyFirstProject));
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<!DOCTYPE html>' + html);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});