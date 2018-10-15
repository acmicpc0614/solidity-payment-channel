import React, { Component } from 'react';
import { Grid, Divider } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Cancel from '../../components/Cancel';
import SGXInsert from '../../components/SGXInsert';
import CounterpartInsert from '../../components/CounterpartInsert';
import DrawBalance from '../../components/DrawBalance';
import AddDepositForm from '../../components/AddDepositForm';

class Manage extends Component {
	static async getInitialProps(props) {
		const { address } = props.query;
		return { address };
	}

	render() {
		return (
			<Layout>
				<h3> Payment Channel Managment - Initiator </h3>
				<Grid>
					<Grid.Row>
						<Grid.Column>
							<Cancel address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
					<Divider />
					<Grid.Row>
						<Grid.Column>
							<DrawBalance address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
					<Divider />
					<Grid.Row>
						<Grid.Column>
							<h4> Insert Required Data to the Channel</h4>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={8}>
							<CounterpartInsert address={this.props.address} />
						</Grid.Column>
						<Grid.Column width={8}>
							<SGXInsert address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
					<Divider />
					<Grid.Row>
						<Grid.Column>
							<h4> Add More Money to the Channel</h4>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<AddDepositForm address={this.props.address} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Layout>
		);
	}
}

export default Manage;
