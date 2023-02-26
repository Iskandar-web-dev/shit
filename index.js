let inpp = document.querySelector('.inpp')
// const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// fill.addEventListener('dragstart', dragStart)
// fill.addEventListener('dragend', dragEnd)

let todos = [
    {
        id: '1sdffdfwe2543241',
        title: 'buy milk',
        description: 'description will be here'
    },
    {
        id: '1sadasd2543241',
        title: 'chek h w',
        description: 'description will be here'
    },
    {
        id: '1sdasdasd241',
        title: 'todo h/t',
        description: 'description will be here'
    }
]

let temp = []
let add2 = document.querySelector('.add2')
let emp1 = document.querySelector('.emp1')

const reload = (arr) => {
    emp1.innerHTML = ""
    for(let item of todos) {
        let div = document.createElement('div')
        let b = document.createElement('b')
        let p = document.createElement('p')
        
        div.setAttribute('id', item.id)
        div.setAttribute('class', 'fill')
        div.setAttribute('draggable', true)
        
        b.innerHTML = item.title
        p.innerHTML = item.description
        
        div.append(b, p)
        empties[0].append(div)
        
        temp.push(div)
    }
}
    console.log(temp);
    reload(todos)
    temp.forEach((item, index) => {
        item.addEventListener('dragstart', dragStart)
        item.addEventListener('dragend', dragEnd)
    })
    
    for(empty of empties) {
        empty.addEventListener('dragover', dragOver)
        empty.addEventListener('dragenter', dragEnter)
        empty.addEventListener('dragleave', dragLeave)
        empty.addEventListener('drop', dragDrop)
    }

let temp_id

function dragStart() {
    console.log('dragStart');   
    temp_id = this.id
    this.className += ' hold'
    setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
    console.log('dragEnd');
    this.className = 'fill'
}

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    console.log('');
    event.preventDefault()
    this.className += ' hovered'
}


function dragLeave() {
    console.log('dragLeave');
    this.className = 'empty'
    console.log(this);
}

function dragDrop(params) {
    console.log('dragDrop');
    this.className = 'empty'
    temp.forEach((item, index) => {
        if(item.id === temp_id) {
            this.append(item)
        }
    })
}

document.querySelectorAll('[data-modal-open]').forEach(button => {
    const id = button.dataset.modalOpen;
    const modal = document.querySelector(`[data-modal="${id}"]`);
    if(modal){
      button.addEventListener('click', () => {
        modal.showModal();
      });
      const closeButton = modal.querySelector('.close');
      if(closeButton){
        closeButton.addEventListener('click', () => {
          modal.close();
        });
      }
    }
  });
  
  let form = document.forms.add_form

  form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {
        id: Math.random(),
        description: 'description will be here'
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
    console.log(todos);
}
  
  
  
