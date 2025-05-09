import { LightningElement } from 'lwc';
export default class QuizApp extends LightningElement {
 myQuestions =[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
          question: "Which of the file is invalid in LWC component folder",
          answers: {
            a: ".svg",
            b: ".apex",
            c: ".js"
          },
          correctAnswer: "b"
        },
        {
          id:"Question3",
          question: "which of the following is not a directive",
          answers: {
            a: "if:true",
            b: "for:each",
            c: "@track"
          },
          correctAnswer: "c"
        }
    ]

    selected={} // for storing answers
    isSubmitted = false
    correctAnswers = 0 // to show the result
    totalQuestions = this.myQuestions.length // to show total questions

    //getter
    get isScoredFull(){
        return `slds-text-heading_large ${this.totalQuestions === this.correctAnswers ?
        'slds-text-color_success':'slds-text-color_error'}`
    }


    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.totalQuestions)
    }

    changeHandler(event){
        console.log('event.target : '+event.target)
        const {name, value} = event.target
        this.selected={...this.selected, [name]:value}
        console.log('this.selected : '+JSON.stringify(this.selected))
    }
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        console.log('correct : '+JSON.stringify(correct))
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
    resetHandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted = false
    }
}