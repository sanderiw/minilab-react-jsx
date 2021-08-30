function ToDoList() {
    const tasks = [
        "Fazer compras",
        "Renovar CNH",
        "Pagar contas",
        "Estudar React",
        "Fazer Minilab",
      ];

      return (
          <ul className="list-group mb-3">
              {tasks.map((task, index) => {
                  return <li key={index} className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                    {task}
                  </li>;
              })}
          </ul>
      );
}

export default ToDoList;