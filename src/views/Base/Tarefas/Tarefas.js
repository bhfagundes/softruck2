import React, { Component } from 'react';
import {
  Pagination, 
  PaginationItem, 
  PaginationLink,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  Table,
} from 'reactstrap';


class Tarefas extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
      <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Cadastro</strong> Tarefas
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nome da Tarefa</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                      <FormText color="muted">Digite aqui o nome da tarefa</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Descrição da Tarefa</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>
          </Col>
      </Row>
      <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tarefas
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>
                      
                    <Row className="align-items-center">
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-facebook btn-brand"><i className="fa fa-edit"></i><span>Editar</span></Button>

                      </Col>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-remove"></i><span>Excluir</span></Button>

                      </Col>
                    </Row>

                    </td>
                  
                   
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>
                      
                    <Row className="align-items-center">
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-facebook btn-brand"><i className="fa fa-edit"></i><span>Editar</span></Button>

                      </Col>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-remove"></i><span>Excluir</span></Button>

                      </Col>
                    </Row>

                    </td>
                  
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>
                      
                    <Row className="align-items-center">
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-facebook btn-brand"><i className="fa fa-edit"></i><span>Editar</span></Button>

                      </Col>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-remove"></i><span>Excluir</span></Button>

                      </Col>
                    </Row>

                    </td>
                   
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>
                      
                    <Row className="align-items-center">
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-facebook btn-brand"><i className="fa fa-edit"></i><span>Editar</span></Button>

                      </Col>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-remove"></i><span>Excluir</span></Button>

                      </Col>
                    </Row>

                    </td>
                   
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>
                      
                    <Row className="align-items-center">
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-facebook btn-brand"><i className="fa fa-edit"></i><span>Editar</span></Button>

                      </Col>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button className="btn-youtube btn-brand mr-1 mb-1"><i className="fa fa-remove"></i><span>Excluir</span></Button>

                      </Col>
                    </Row>

                    </td>
                   
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
    </div>
    );
  }
}

export default Tarefas;
