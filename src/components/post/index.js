import React, { Component } from "react";

import Feed from "../feed/index";

class PostComponent extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://upload-example-vini.s3.amazonaws.com/4d294d8edc5a4aa585696a355ea42ba1-profile.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://upload-example-vini.s3.amazonaws.com/6bc88761b2c8eeb52be33aec1999263c-diego.JPG"
            },
            content:
              " A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos" +
              "de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs" +
              "é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar" +
              "gravando vídeos e criando posts, pode me chamar no Discord!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Vinicius Strauss",
          avatar:
            "https://upload-example-vini.s3.amazonaws.com/4d294d8edc5a4aa585696a355ea42ba1-profile.png"
        },
        date: "04 Jun 2019",
        content:
          "Pessoal, estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa!" +
          "Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia",
        comments: [
          {
            id: 1,
            author: {
              name: "Filipe Deschamps",
              avatar:
                "https://upload-example-vini.s3.amazonaws.com/92ebf134fe6d0d4bada304952af29ac5-felipe.JPG"
            },
            content:
              " Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre" +
              "Node e já tenho minha API dos desafios constrídas"
          },
          {
            id: 2,
            author: {
              name: "Rocketseat",
              avatar:
                "https://upload-example-vini.s3.amazonaws.com/0975c916b17b6fb84570850068e0967e-rocketseat.JPG"
            },
            content:
              " Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é " +
              "desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <Feed key={post.id} {...post} />
        ))}
      </ul>
    );
  }
}

export default PostComponent;
