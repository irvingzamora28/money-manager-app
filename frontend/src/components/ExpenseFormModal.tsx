import React from "react";
import ExpenseForm from "./ExpenseForm";

type Props = {
    setExpenseFormModalOpen: React.Dispatch<React.SetStateAction<any>>;
};

const ExpenseFormModal: React.FC<Props> = ({setExpenseFormModalOpen}) => {

    const closeModal = (event: React.MouseEvent<HTMLDivElement> & {target: HTMLDivElement} ) => {
        // Event propagates, make sure modal background was clicked
        if (event.target.id !== "expenseFormModalOverlay") return
        setExpenseFormModalOpen(false)
    }

	return (
		<>
			<div
				className="modal flex fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden items-center justify-center overflow-y-auto z-20 bg-black/80"
				id="expenseFormModalOverlay"
				tabIndex={-1}
				aria-labelledby="expenseFormModalLabel"
				aria-hidden="true"
                onClick={closeModal}
			>
				<div className="flex modal-dialog absolute pointer-events-none w-11/12">
					<div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white z-30 bg-clip-padding rounded-md outline-none text-current">
						
						<div className="modal-body relative p-4">
							<ExpenseForm setExpenseFormModalOpen={setExpenseFormModalOpen} />
                        </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExpenseFormModal;
